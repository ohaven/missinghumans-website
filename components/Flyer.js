import { formatDate } from "@/lib/states";

/* The printable 8.5x11 flyer. Rendered at a fixed 816px width (96 dpi letter) and scaled with CSS for preview. */
export function Flyer({ d, innerRef }) {
  const facts = [
    ["Age", d.age], ["Height", d.height], ["Weight", d.weight], ["Hair", d.hair], ["Eyes", d.eyes],
    ["Marks / Tattoos", d.marks], ["Medical", d.medical], ["Vehicle", d.vehicle],
  ].filter(([, v]) => v);

  return (
    <div className="flyer" ref={innerRef}>
      <h1 className="flyer-title">Missing</h1>
      <p className="flyer-sub">{d.caseType === "child" ? "Missing Child — Please Help" : d.caseType === "elder" ? "Missing Senior — May Be Disoriented" : d.caseType === "medical" ? "Missing — Needs Medical Care" : "Have You Seen This Person?"}</p>
      <div className="flyer-photo">{d.photo ? <img src={d.photo} alt="" /> : <span>PHOTO</span>}</div>
      <h2 className="flyer-name">{d.name || "Full Name"}</h2>
      <div className="flyer-facts">
        {facts.map(([k, v]) => (<div key={k}><span>{k}</span>{v}</div>))}
      </div>
      <div className="flyer-lastseen">
        <strong>LAST SEEN:</strong> {d.dateMissing ? formatDate(d.dateMissing) : "Date"}{d.location ? ` — ${d.location}` : ""}
        {d.wearing && <><br /><strong>WEARING:</strong> {d.wearing}</>}
        {d.notes && <><br />{d.notes}</>}
      </div>
      <div className="flyer-contact">
        <p className="sm">IF YOU HAVE ANY INFORMATION, PLEASE CALL</p>
        <p className="big">{d.contactPhone || "000-000-0000"}</p>
        <p className="sm">{d.contactName || "Investigating agency"}{d.caseNumber ? ` · Case #${d.caseNumber}` : ""} · or dial 911</p>
        {d.reward && <p className="sm" style={{ marginTop: 6, fontWeight: 800 }}>REWARD: {d.reward}</p>}
      </div>
      <p className="flyer-footer">Created free at missinghumans.com · Please share and post</p>
    </div>
  );
}

/* Square 1080x1080 version for Instagram / Facebook feeds. */
export function SquareFlyer({ d, innerRef }) {
  return (
    <div ref={innerRef} style={{
      width: 1080, height: 1080, background: "#fff", color: "#111", border: "14px solid #c8102e",
      boxSizing: "border-box", padding: 36, display: "flex", flexDirection: "column", alignItems: "center",
      fontFamily: "var(--font-body), Arial, sans-serif", textAlign: "center",
    }}>
      <div style={{ fontFamily: "var(--font-head), Impact, sans-serif", fontSize: 150, lineHeight: .9, color: "#c8102e", textTransform: "uppercase" }}>Missing</div>
      <div style={{ width: 460, height: 460, background: "#eee", overflow: "hidden", border: "4px solid #111", margin: "18px 0", display: "grid", placeItems: "center", color: "#777" }}>
        {d.photo ? <img src={d.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : "PHOTO"}
      </div>
      <div style={{ fontFamily: "var(--font-head), Impact, sans-serif", fontSize: 64, textTransform: "uppercase", lineHeight: 1 }}>{d.name || "Full Name"}</div>
      <div style={{ fontSize: 30, marginTop: 10 }}>
        {[d.age && `Age ${d.age}`, d.height, d.weight].filter(Boolean).join(" · ")}
      </div>
      <div style={{ fontSize: 28, marginTop: 8, maxWidth: 940 }}>
        Last seen {d.dateMissing ? formatDate(d.dateMissing) : ""}{d.location ? ` — ${d.location}` : ""}
      </div>
      <div style={{ marginTop: "auto", background: "#111", color: "#fff", padding: "18px 30px", width: "100%" }}>
        <div style={{ fontSize: 24 }}>HAVE INFORMATION? CALL</div>
        <div style={{ fontFamily: "var(--font-head), Impact, sans-serif", fontSize: 60, lineHeight: 1 }}>{d.contactPhone || "000-000-0000"}</div>
        <div style={{ fontSize: 22 }}>{d.contactName || "Investigating agency"} · or 911</div>
      </div>
    </div>
  );
}
