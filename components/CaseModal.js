"use client";
import { useEffect } from "react";
import { formatDate, stateName } from "@/lib/states";
import ShareButtons from "./ShareButtons";
import { site } from "@/data/site";

export default function CaseModal({ c, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const found = c.status === "found";
  const url = `${site.url}/database?case=${c.id}`;
  const shareText = `MISSING: ${c.name}, ${c.age ? `age ${c.age}, ` : ""}last seen ${formatDate(c.dateMissing)} in ${c.city}, ${stateName(c.state)}. ${c.lastSeenWearing ? `Last seen wearing ${c.lastSeenWearing}. ` : ""}If you have information call ${c.agency || "police"} at ${c.agencyPhone || "911"}. Please share.`;

  const rows = [
    ["Age", c.age], ["Height", c.height], ["Weight", c.weight], ["Hair", c.hair], ["Eyes", c.eyes],
    ["Distinguishing marks", c.distinguishingMarks], ["Last seen wearing", c.lastSeenWearing],
    ["Medical", c.medical], ["Vehicle", c.vehicle], ["Case number", c.caseNumber],
  ].filter(([, v]) => v);

  return (
    <div className="modal-bg" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Details for ${c.name}`}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <span className={`badge ${found ? "badge-found" : "badge-missing"}`}>{found ? "Located" : "Missing"}</span>
        <h2 style={{ marginTop: 8 }}>{c.name}</h2>
        <p className="muted">Missing since {formatDate(c.dateMissing)} · {c.city}, {stateName(c.state)}</p>

        <div style={{ display: "grid", gap: 20, gridTemplateColumns: c.photo ? "minmax(160px, 240px) 1fr" : "1fr" }}>
          {c.photo && <img src={c.photo} alt={`Photo of ${c.name}`} style={{ borderRadius: 8, width: "100%" }} />}
          <div>
            {c.summary && <p>{c.summary}</p>}
            <dl className="detail-grid">
              {rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
            </dl>
          </div>
        </div>

        {!found && (
          <div className="notice notice-urgent">
            <h3>Have information?</h3>
            <p>
              Call <strong>{c.agency || "your local police"}</strong>
              {c.agencyPhone && <> at <a href={`tel:${c.agencyPhone.replace(/[^0-9+]/g, "")}`}><strong>{c.agencyPhone}</strong></a></>}
              {c.caseNumber && <> and reference case #{c.caseNumber}</>}. In an emergency call 911.
              {c.familyPhone && <> Family contact: <a href={`tel:${c.familyPhone.replace(/[^0-9+]/g, "")}`}>{c.familyPhone}</a>.</>}
              {c.reward && <> <strong>Reward offered: {c.reward}.</strong></>}
            </p>
            {c.namusUrl && <p><a href={c.namusUrl} target="_blank" rel="noopener noreferrer">View on NamUs →</a></p>}
          </div>
        )}

        <h4>Help by sharing</h4>
        <ShareButtons text={shareText} url={url} />
      </div>
    </div>
  );
}
