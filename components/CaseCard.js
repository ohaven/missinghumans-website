"use client";
import { useState } from "react";
import { formatDate, daysSince, stateName } from "@/lib/states";
import CaseModal from "./CaseModal";

export default function CaseCard({ c }) {
  const [open, setOpen] = useState(false);
  const found = c.status === "found";
  const days = daysSince(c.dateMissing);
  return (
    <>
      <article className="case-card">
        <div className="case-photo">
          {c.photo ? <img src={c.photo} alt={`Photo of ${c.name}`} /> : <span>No photo provided</span>}
        </div>
        <div className="case-body">
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span className={`badge ${found ? "badge-found" : "badge-missing"}`}>{found ? "Located" : "Missing"}</span>
            {c.caseType && <span className="badge badge-type">{c.caseType}</span>}
          </div>
          <h3>{c.name}</h3>
          <div className="case-meta">
            {c.age ? `Age ${c.age} · ` : ""}{c.city}, {stateName(c.state)}
          </div>
          <div className="case-meta">
            Missing since {formatDate(c.dateMissing)}{days !== null && !found ? ` (${days} day${days === 1 ? "" : "s"})` : ""}
          </div>
        </div>
        <div className="case-actions">
          <button className="btn btn-primary btn-block" onClick={() => setOpen(true)}>Details &amp; how to help</button>
        </div>
      </article>
      {open && <CaseModal c={c} onClose={() => setOpen(false)} />}
    </>
  );
}
