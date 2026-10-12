import { formatDate } from "@/lib/states";

const cut = (str, n) => (str && str.length > n ? str.slice(0, n - 1).trimEnd() + "…" : str || "");
const nameSize = (n) => (n.length > 30 ? 30 : n.length > 22 ? 36 : 46);

const headline = (t) =>
  t === "child" ? "Missing Child — Please Help"
  : t === "elder" ? "Missing Senior — May Be Disoriented"
  : t === "medical" ? "Missing — Needs Medical Care"
  : "Have You Seen This Person?";

/* Printable 8.5x11 flyer. Fixed 816x1056 (letter at 96 dpi); the photo flexes to fill leftover space. */
export function Flyer({ d, innerRef }) {
  const facts = [
    ["Age", d.age], ["Height", d.height], ["Weight", d.weight], ["Hair", d.hair], ["Eyes", d.eyes],
    ["Marks / Tattoos", d.marks], ["Medical", d.medical], ["Vehicle", d.vehicle],
  ].filter(([, v]) => v).map(([k, v]) => [k, cut(v, 58)]);
  const name = cut(d.name || "Full Name", 40);

  return (
    <div className="flyer" ref={innerRef}>
      <h1 className="flyer-title">Missing</h1>
      <p className="flyer-sub">{headline(d.caseType)}</p>
      <div className={`flyer-photo${d.photo ? "" : " flyer-photo-empty"}`} style={d.photo ? { backgroundImage: `url(${d.photo})` } : undefined}>{!d.photo && <span>PHOTO</span>}</div>
      <h2 className="flyer-name" style={{ fontSize: nameSize(name) }}>{name}</h2>
      {facts.length > 0 && (
        <div className="flyer-facts">
          {facts.map(([k, v]) => (<div key={k}><span>{k}</span>{v}</div>))}
        </div>
      )}
      <div className="flyer-lastseen">
        <strong>LAST SEEN:</strong> {d.dateMissing ? formatDate(d.dateMissing) : "Date"}{d.location ? ` — ${cut(d.location, 80)}` : ""}
        {d.wearing && <><br /><strong>WEARING:</strong> {cut(d.wearing, 90)}</>}
        {d.notes && <><br />{cut(d.notes, 170)}</>}
      </div>
      <div className="flyer-contact">
        <p className="sm">IF YOU HAVE ANY INFORMATION, PLEASE CALL</p>
        <p className="big">{d.contactPhone || "000-000-0000"}</p>
        <p className="sm">{cut(d.contactName || "Investigating agency", 40)}{d.caseNumber ? ` · Case #${d.caseNumber}` : ""} · or dial 911{d.reward ? ` · REWARD: ${d.reward}` : ""}</p>
      </div>
      <p className="flyer-footer">Created free at missinghumans.com · Please share and post</p>
    </div>
  );
}

/* Square 1080x1080 version for Instagram / Facebook feeds. Fixed size; photo flexes. */
export function SquareFlyer({ d, innerRef }) {
  const head = { fontFamily: "var(--font-head), Impact, sans-serif", textTransform: "uppercase", lineHeight: 1.15 };
  const sqName = cut(d.name || "Full Name", 30);
  return (
    <div ref={innerRef} style={{
      width: 1080, height: 1080, background: "#fff", color: "#111", border: "14px solid #c8102e",
      boxSizing: "border-box", padding: "24px 36px 28px", display: "flex", flexDirection: "column", alignItems: "stretch", gap: 10,
      fontFamily: "var(--font-body), Arial, sans-serif", textAlign: "center", overflow: "hidden",
    }}>
      <div style={{ ...head, fontSize: 124, color: "#c8102e", letterSpacing: ".04em", flex: "0 0 auto", lineHeight: 1.2 }}>Missing</div>
      <div style={{ fontSize: 24, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", flex: "0 0 auto" }}>{headline(d.caseType)}</div>
      <div style={{ flex: "1 1 0", minHeight: 160, background: d.photo ? "#fff" : "#eee", overflow: "hidden", border: "4px solid #111", display: "flex", alignItems: "center", justifyContent: "center", color: "#777",
        backgroundImage: d.photo ? `url(${d.photo})` : "none", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        {!d.photo && "PHOTO"}
      </div>
      <div style={{ ...head, fontSize: sqName.length > 22 ? 44 : 60, flex: "0 0 auto" }}>{sqName}</div>
      <div style={{ fontSize: 28, flex: "0 0 auto" }}>
        {cut([d.age && `Age ${d.age}`, d.height, d.weight, d.eyes && `${d.eyes} eyes`].filter(Boolean).join(" · "), 60)}
      </div>
      <div style={{ fontSize: 26, lineHeight: 1.25, flex: "0 0 auto" }}>
        Last seen {d.dateMissing ? formatDate(d.dateMissing) : ""}{d.location ? ` — ${cut(d.location, 70)}` : ""}{d.wearing ? `. Wearing ${cut(d.wearing, 60)}` : ""}
      </div>
      <div style={{ flex: "0 0 auto", background: "#111", color: "#fff", padding: "14px 30px" }}>
        <div style={{ fontSize: 22 }}>HAVE INFORMATION? CALL</div>
        <div style={{ ...head, fontSize: 54, margin: "4px 0" }}>{d.contactPhone || "000-000-0000"}</div>
        <div style={{ fontSize: 20 }}>{cut(d.contactName || "Investigating agency", 40)}{d.caseNumber ? ` · Case #${d.caseNumber}` : ""} · or 911</div>
      </div>
    </div>
  );
}
