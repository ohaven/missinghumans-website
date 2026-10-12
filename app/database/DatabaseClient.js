"use client";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cases } from "@/data/cases";
import { STATES } from "@/lib/states";
import CaseCard from "@/components/CaseCard";
import CaseModal from "@/components/CaseModal";

export default function DatabaseClient() {
  const params = useSearchParams();
  const [q, setQ] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");
  const [ageBand, setAgeBand] = useState("");
  const [showFound, setShowFound] = useState(false);
  const [deepLink, setDeepLink] = useState(null);

  // Open a case directly from a shared link: /database?case=ID
  useEffect(() => {
    const id = params.get("case");
    if (id) setDeepLink(cases.find((c) => c.id === id) || null);
  }, [params]);

  const usedStates = useMemo(() => STATES.filter(([c]) => cases.some((k) => k.state === c)), []);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return cases
      .filter((c) => showFound || c.status !== "found")
      .filter((c) => !state || c.state === state)
      .filter((c) => !type || c.caseType === type)
      .filter((c) => {
        if (!ageBand) return true;
        const a = Number(c.age);
        if (ageBand === "child") return a < 18;
        if (ageBand === "adult") return a >= 18 && a < 60;
        if (ageBand === "senior") return a >= 60;
        return true;
      })
      .filter((c) => {
        if (!needle) return true;
        const hay = [c.name, c.city, c.state, c.distinguishingMarks, c.lastSeenWearing, c.vehicle, c.summary, c.caseNumber]
          .join(" ").toLowerCase();
        return hay.includes(needle);
      })
      .sort((a, b) => (b.dateMissing || "").localeCompare(a.dateMissing || ""));
  }, [q, state, type, ageBand, showFound]);

  return (
    <>
      <div className="card" style={{ marginBottom: 24 }}>
        <div className="filters">
          <div className="field">
            <label htmlFor="q">Search</label>
            <input id="q" placeholder="Name, city, tattoo, vehicle…" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="st">State</label>
            <select id="st" value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">All states</option>
              {usedStates.map(([c, n]) => <option key={c} value={c}>{n}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="ty">Case type</label>
            <select id="ty" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All types</option>
              <option value="adult">Adult</option>
              <option value="child">Child</option>
              <option value="elder">Elder</option>
              <option value="medical">Medical / at-risk</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="ag">Age</label>
            <select id="ag" value={ageBand} onChange={(e) => setAgeBand(e.target.value)}>
              <option value="">Any age</option>
              <option value="child">Under 18</option>
              <option value="adult">18 – 59</option>
              <option value="senior">60 and over</option>
            </select>
          </div>
        </div>
        <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: ".95rem" }}>
          <input type="checkbox" checked={showFound} onChange={(e) => setShowFound(e.target.checked)} /> Include people who have been located
        </label>
      </div>

      <p className="muted small">{results.length} case{results.length === 1 ? "" : "s"} shown</p>

      {results.length === 0 ? (
        <div className="notice">
          <p>No cases match those filters. If you&apos;re searching for someone, you can <Link href="/submit">submit their case</Link> so others can see it.</p>
        </div>
      ) : (
        <div className="case-grid">{results.map((c) => <CaseCard key={c.id} c={c} />)}</div>
      )}

      <div className="notice" style={{ marginTop: 32 }}>
        <h4>Looking for a wider search?</h4>
        <p>
          <a href="https://namus.nij.ojp.gov" target="_blank" rel="noopener noreferrer">NamUs</a> is the national database run by the U.S. Department of Justice,
          and <a href="https://www.missingkids.org" target="_blank" rel="noopener noreferrer">NCMEC</a> covers missing children nationwide. Both are free to search.
        </p>
      </div>

      {deepLink && <CaseModal c={deepLink} onClose={() => setDeepLink(null)} />}
    </>
  );
}
