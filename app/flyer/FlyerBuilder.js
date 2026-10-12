"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Flyer, SquareFlyer } from "@/components/Flyer";
import { formatDate } from "@/lib/states";

const empty = {
  caseType: "adult", name: "", age: "", height: "", weight: "", hair: "", eyes: "", marks: "", medical: "", vehicle: "",
  dateMissing: "", location: "", wearing: "", notes: "", contactName: "", contactPhone: "", caseNumber: "", reward: "", photo: "",
};

function Field({ k, label, hint, type = "text", placeholder, value, onChange }) {
  return (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      <input id={k} type={type} value={value} onChange={onChange} placeholder={placeholder} />
      {hint && <span className="hint">{hint}</span>}
    </div>
  );
}

export default function FlyerBuilder() {
  const [d, setD] = useState(empty);
  const [busy, setBusy] = useState("");
  const [scale, setScale] = useState(0.5);
  const [copied, setCopied] = useState("");
  const previewWrap = useRef(null);
  const flyerRef = useRef(null);
  const squareRef = useRef(null);

  const set = (k) => (e) => setD({ ...d, [k]: e.target.value });

  // Scale the 816px flyer to fit the preview column.
  useEffect(() => {
    const fit = () => previewWrap.current && setScale(Math.min(1, (previewWrap.current.clientWidth - 24) / 816));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const onPhoto = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Downscale large phone photos so downloads stay quick.
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const max = 1400;
      const r = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * r); c.height = Math.round(img.height * r);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      setD((prev) => ({ ...prev, photo: c.toDataURL("image/jpeg", 0.9) }));
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const fileBase = () => (d.name ? d.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase() : "missing-person");

  const capture = async (node, scaleFactor = 2) => {
    const { default: html2canvas } = await import("html2canvas");
    const sx = window.scrollX, sy = window.scrollY;
    try {
      return await html2canvas(node, { scale: scaleFactor, useCORS: true, backgroundColor: "#ffffff", logging: false, scrollX: 0, scrollY: 0, windowWidth: 1200, windowHeight: 1200 });
    } finally { window.scrollTo(sx, sy); document.body.scrollLeft = 0; }
  };

  const downloadPDF = async () => {
    setBusy("pdf");
    try {
      const canvas = await capture(flyerRef.current, 2);
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({ unit: "in", format: "letter", orientation: "portrait" });
      const ratio = canvas.height / canvas.width;
      let w = 8.5, h = w * ratio;
      if (h > 11) { h = 11; w = h / ratio; }
      pdf.addImage(canvas.toDataURL("image/jpeg", 0.92), "JPEG", (8.5 - w) / 2, (11 - h) / 2, w, h);
      pdf.save(`${fileBase()}-missing-flyer.pdf`);
    } catch (err) { alert("Sorry — the PDF could not be created on this device. Try 'Print' instead, or download the image."); }
    setBusy("");
  };

  const downloadImage = async (which) => {
    setBusy(which);
    try {
      const node = which === "square" ? squareRef.current : flyerRef.current;
      const canvas = await capture(node, which === "square" ? 1 : 2);
      const a = document.createElement("a");
      a.download = `${fileBase()}-missing-${which === "square" ? "social-square" : "flyer"}.png`;
      a.href = canvas.toDataURL("image/png");
      a.click();
    } catch (err) { alert("Sorry — the image could not be created on this device."); }
    setBusy("");
  };

  const print = () => window.print();

  const summary = `MISSING: ${d.name || "[Name]"}${d.age ? `, age ${d.age}` : ""}. Last seen ${d.dateMissing ? formatDate(d.dateMissing) : "[date]"}${d.location ? ` near ${d.location}` : ""}.${d.wearing ? ` Wearing ${d.wearing}.` : ""}${d.marks ? ` ${d.marks}.` : ""}${d.medical ? ` ${d.medical}.` : ""}`;
  const callLine = `If you have ANY information, please call ${d.contactName || "police"} at ${d.contactPhone || "[phone]"}${d.caseNumber ? ` (case #${d.caseNumber})` : ""} or dial 911.`;

  const posts = {
    facebook: `🚨 PLEASE SHARE 🚨\n\n${summary}\n\n${callLine}\n\nEvery share helps. Thank you. #Missing #MissingPerson${d.location ? ` #${d.location.split(",")[0].replace(/\s+/g, "")}` : ""}`,
    twitter: `🚨 MISSING: ${d.name || "[Name]"}${d.age ? `, ${d.age}` : ""}. Last seen ${d.dateMissing ? formatDate(d.dateMissing) : "[date]"}${d.location ? ` in ${d.location}` : ""}. Info? Call ${d.contactPhone || "[phone]"} or 911. Please RT. #MissingPerson`,
    instagram: `🚨 MISSING — PLEASE SHARE 🚨\n\n${summary}\n\n${callLine}\n\nShare to your story. Every set of eyes matters.\n.\n.\n#missing #missingperson #help #pleaseshare #bringthemhome`,
    nextdoor: `Neighbors — ${summary} ${callLine} Please check doorbell and security cameras from that date and share this post with nearby groups. Thank you.`,
  };

  const copy = async (k) => {
    try { await navigator.clipboard.writeText(posts[k]); setCopied(k); setTimeout(() => setCopied(""), 1800); } catch {}
  };


  return (
    <>
      <div className="flyer-layout">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="card form">
            <h3>1. Who is missing</h3>
            <div className="field">
              <label htmlFor="caseType">Situation</label>
              <select id="caseType" value={d.caseType} onChange={set("caseType")}>
                <option value="adult">Adult</option>
                <option value="child">Child (under 18)</option>
                <option value="elder">Older adult / may be disoriented</option>
                <option value="medical">Needs medication or medical care</option>
              </select>
              <span className="hint">Changes the headline so people know how urgent it is.</span>
            </div>
            <Field k="name" value={d.name} onChange={set("name")} label="Full name" placeholder="First and last name" />
            <div className="row-2">
              <Field k="age" value={d.age} onChange={set("age")} label="Age" placeholder="34" />
              <Field k="height" value={d.height} onChange={set("height")} label="Height" placeholder={`5'11"`} />
              <Field k="weight" value={d.weight} onChange={set("weight")} label="Weight" placeholder="180 lbs" />
            </div>
            <div className="row-2">
              <Field k="hair" value={d.hair} onChange={set("hair")} label="Hair" placeholder="Brown, short" />
              <Field k="eyes" value={d.eyes} onChange={set("eyes")} label="Eyes" placeholder="Brown" />
            </div>
            <Field k="marks" value={d.marks} onChange={set("marks")} label="Tattoos, scars, glasses, other marks" placeholder="Compass tattoo on left forearm; wears glasses" />
            <Field k="medical" value={d.medical} onChange={set("medical")} label="Medical conditions (if relevant)" hint="Only include what helps someone recognize or help them — e.g. 'has dementia', 'needs insulin'." />
            <div className="field">
              <label htmlFor="photo">Photo</label>
              <input id="photo" type="file" accept="image/*" onChange={onPhoto} />
              <span className="hint">Use the clearest, most recent face photo you have. The photo never leaves your device.</span>
            </div>
          </div>

          <div className="card form">
            <h3>2. Last seen</h3>
            <Field k="dateMissing" value={d.dateMissing} onChange={set("dateMissing")} label="Date last seen" type="date" />
            <Field k="location" value={d.location} onChange={set("location")} label="Location last seen" placeholder="Near 4th St & Central Ave, Albuquerque, NM" />
            <Field k="wearing" value={d.wearing} onChange={set("wearing")} label="Last seen wearing" placeholder="Gray hoodie, dark jeans, white sneakers" />
            <Field k="vehicle" value={d.vehicle} onChange={set("vehicle")} label="Vehicle (if any)" placeholder="Silver 2015 Honda Civic, NM plate ABC-123" />
            <div className="field">
              <label htmlFor="notes">Anything else people should know</label>
              <textarea id="notes" value={d.notes} onChange={set("notes")} placeholder="May be heading toward Denver. Does not have a phone with him." />
            </div>
          </div>

          <div className="card form">
            <h3>3. Who to call</h3>
            <div className="notice" style={{ margin: 0 }}>
              <p className="small" style={{ margin: 0 }}>
                Put the <strong>police department&apos;s number</strong> on the flyer whenever you can. Tips go straight to investigators,
                and your personal number stays off thousands of posters. Add your own number only if you&apos;re comfortable with it being public.
              </p>
            </div>
            <Field k="contactName" value={d.contactName} onChange={set("contactName")} label="Agency or contact name" placeholder="Albuquerque Police Department" />
            <Field k="contactPhone" value={d.contactPhone} onChange={set("contactPhone")} label="Phone number" placeholder="505-242-2677" />
            <div className="row-2">
              <Field k="caseNumber" value={d.caseNumber} onChange={set("caseNumber")} label="Case / report number" placeholder="26-0123456" />
              <Field k="reward" value={d.reward} onChange={set("reward")} label="Reward (optional)" placeholder="$5,000" />
            </div>
          </div>
        </form>

        <div className="flyer-preview-wrap" ref={previewWrap}>
          <h3>Preview</h3>
          <div className="flyer-scale" style={{ height: 1056 * scale + 24 }}>
            <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: 816 }}>
              <Flyer d={d} />
            </div>
          </div>
          <div className="share-row" style={{ marginTop: 14 }}>
            <button className="btn btn-urgent" onClick={downloadPDF} disabled={!!busy}>{busy === "pdf" ? "Creating…" : "Download PDF"}</button>
            <button className="btn btn-primary" onClick={() => downloadImage("poster")} disabled={!!busy}>{busy === "poster" ? "Creating…" : "Download image"}</button>
            <button className="btn btn-primary" onClick={() => downloadImage("square")} disabled={!!busy}>{busy === "square" ? "Creating…" : "Square for social"}</button>
            <button className="btn btn-ghost" onClick={print}>Print</button>
          </div>
          <p className="small muted" style={{ marginTop: 10 }}>
            Print at FedEx Office, Staples, UPS Store, or a library. Ask local businesses, gas stations, and bus stops to post it.
            See <Link href="/resources/effective-flyer">tips for an effective flyer</Link>.
          </p>
        </div>
      </div>

      <section className="section">
        <h2>Social media kit</h2>
        <p className="lead">Ready-to-paste posts built from what you entered. Download the square image above and attach it.</p>
        <div className="grid grid-2">
          {[["facebook", "Facebook / community groups"], ["twitter", "X / Twitter (short)"], ["instagram", "Instagram / TikTok caption"], ["nextdoor", "Nextdoor / neighborhood apps"]].map(([k, label]) => (
            <div className="card" key={k}>
              <h4>{label}</h4>
              <div className="copy-box">{posts[k]}</div>
              <button className="btn btn-outline" style={{ marginTop: 10 }} onClick={() => copy(k)}>{copied === k ? "Copied!" : "Copy"}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Off-screen, full-size copies used for downloads and printing */}
      <div className="offscreen" aria-hidden>
        <div className="print-area">
        <Flyer d={d} innerRef={flyerRef} />
        <SquareFlyer d={d} innerRef={squareRef} />
        </div>
      </div>
    </>
  );
}
