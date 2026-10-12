"use client";
import { useState } from "react";
import { site } from "@/data/site";
import { STATES } from "@/lib/states";

/* Case submission. Sends through Formspree when site.formspreeId is set; otherwise opens an email with everything filled in. */
export default function SubmitForm() {
  const [status, setStatus] = useState("");
  const hasFormspree = !!site.formspreeId;

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // spam honeypot
    if (!data.get("consent")) { setStatus("consent"); return; }

    if (hasFormspree) {
      setStatus("sending");
      try {
        const r = await fetch(`https://formspree.io/f/${site.formspreeId}`, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (r.ok) { window.location.href = "/thanks"; return; }
        setStatus("error");
      } catch { setStatus("error"); }
      return;
    }

    // Fallback: compose an email.
    const lines = [];
    data.forEach((v, k) => { if (k.startsWith("_") || k === "photo" || !v) return; lines.push(`${k}: ${v}`); });
    lines.push("", "(Please attach the photo to this email before sending.)");
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(`Missing person case submission: ${data.get("missingName")}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("mailto");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="New Missing Humans case submission" />

      <div className="card form">
        <h3>About you</h3>
        <div className="row-2">
          <div className="field"><label>Your name <span className="req">*</span></label><input name="yourName" required /></div>
          <div className="field"><label>Relationship to the missing person <span className="req">*</span></label><input name="relationship" required placeholder="Sister, parent, spouse, friend…" /></div>
        </div>
        <div className="row-2">
          <div className="field"><label>Your email <span className="req">*</span></label><input name="email" type="email" required /></div>
          <div className="field"><label>Your phone <span className="req">*</span></label><input name="yourPhone" type="tel" required /><span className="hint">For our verification only — not published unless you ask.</span></div>
        </div>
      </div>

      <div className="card form">
        <h3>About the missing person</h3>
        <div className="field"><label>Full name <span className="req">*</span></label><input name="missingName" required /></div>
        <div className="row-2">
          <div className="field"><label>Age <span className="req">*</span></label><input name="age" required inputMode="numeric" /></div>
          <div className="field">
            <label>Situation <span className="req">*</span></label>
            <select name="caseType" required defaultValue="adult">
              <option value="adult">Adult</option><option value="child">Child (under 18)</option>
              <option value="elder">Older adult / cognitive impairment</option><option value="medical">Needs medication / medical care</option>
            </select>
          </div>
        </div>
        <div className="row-2">
          <div className="field"><label>Date last seen <span className="req">*</span></label><input name="dateMissing" type="date" required /></div>
          <div className="field"><label>City <span className="req">*</span></label><input name="city" required /></div>
          <div className="field">
            <label>State <span className="req">*</span></label>
            <select name="state" required defaultValue="">
              <option value="" disabled>Select…</option>
              {STATES.map(([c, n]) => <option key={c} value={c}>{n}</option>)}
            </select>
          </div>
        </div>
        <div className="row-2">
          <div className="field"><label>Height</label><input name="height" /></div>
          <div className="field"><label>Weight</label><input name="weight" /></div>
          <div className="field"><label>Hair</label><input name="hair" /></div>
          <div className="field"><label>Eyes</label><input name="eyes" /></div>
        </div>
        <div className="field"><label>Distinguishing marks</label><input name="marks" placeholder="Tattoos, scars, glasses, braces…" /></div>
        <div className="field"><label>Last seen wearing</label><input name="wearing" /></div>
        <div className="field"><label>Vehicle</label><input name="vehicle" placeholder="Make, model, color, plate" /></div>
        <div className="field"><label>Medical conditions relevant to their safety</label><input name="medical" /></div>
        <div className="field"><label>What happened / anything else people should know</label><textarea name="summary" placeholder="Keep it factual. This text may be published on the case page." /></div>
        {hasFormspree ? (
          <div className="field"><label>Photo <span className="req">*</span></label><input name="photo" type="file" accept="image/*" required /><span className="hint">Clear, recent face photo.</span></div>
        ) : (
          <div className="notice" style={{ margin: 0 }}><p className="small" style={{ margin: 0 }}>You&apos;ll attach the photo to the email that opens after you click submit.</p></div>
        )}
      </div>

      <div className="card form">
        <h3>Police report</h3>
        <div className="notice notice-urgent" style={{ margin: 0 }}>
          <p className="small" style={{ margin: 0 }}>We only post cases that have been reported to law enforcement. If you haven&apos;t reported yet, <a href="/resources/first-hours">do that first</a> — it takes priority over everything on this site.</p>
        </div>
        <div className="row-2">
          <div className="field"><label>Investigating agency <span className="req">*</span></label><input name="agency" required placeholder="City police / county sheriff" /></div>
          <div className="field"><label>Agency phone <span className="req">*</span></label><input name="agencyPhone" type="tel" required /></div>
          <div className="field"><label>Case / report number</label><input name="caseNumber" /></div>
        </div>
        <div className="row-2">
          <div className="field"><label>NamUs or NCMEC link (if any)</label><input name="namusUrl" type="url" placeholder="https://" /></div>
          <div className="field"><label>Reward (optional)</label><input name="reward" /></div>
        </div>
        <div className="field"><label>Public family contact number (optional)</label><input name="familyPhone" type="tel" /><span className="hint">Only if you want it shown publicly. We recommend using the agency number.</span></div>
      </div>

      <div className="card form">
        <label style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <input type="checkbox" name="consent" value="yes" style={{ marginTop: 5 }} />
          <span className="small">I am a family member or authorized representative, the information is accurate to the best of my knowledge, and I give permission to publish it (including the photo) on missinghumans.com. I understand I can request removal at any time by emailing <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</span>
        </label>
        {status === "consent" && <p className="small" style={{ color: "var(--urgent)" }}>Please check the permission box to continue.</p>}
        {status === "error" && <p className="small" style={{ color: "var(--urgent)" }}>Something went wrong sending the form. Please email us directly at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>}
        {status === "mailto" && <p className="small">Your email app should have opened with the details filled in. Attach the photo and send.</p>}
        <button className="btn btn-urgent" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit case for review"}</button>
        <p className="small muted">Submissions are reviewed by a person before anything is posted, usually within 24 hours. We may call you to confirm.</p>
      </div>
    </form>
  );
}
