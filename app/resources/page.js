import Link from "next/link";
import { STATES } from "@/lib/states";
import { guides } from "@/lib/guides";

export const metadata = {
  title: "Resources & Guidance",
  description: "Plain-language guides for families of missing persons: first steps, working with police, flyers, and national resources.",
};



export default function ResourcesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Resources &amp; Guidance</h1>
        <p className="lead">
          Written in plain language by a family that went through this. These guides are not legal advice and
          don&apos;t replace law enforcement — they help you work with it.
        </p>

        <h2 style={{ marginTop: 32 }}>Guides</h2>
        <div className="toc">
          {guides.map(([href, title, desc]) => (
            <Link key={href} href={href}><strong>{title}</strong><span className="muted">{desc}</span></Link>
          ))}
        </div>

        <h2 style={{ marginTop: 48 }}>National agencies &amp; hotlines</h2>
        <div className="card" style={{ overflowX: "auto" }}>
          <table className="resource-table">
            <thead><tr><th>Who</th><th>When to use them</th><th>Contact</th></tr></thead>
            <tbody>
              <tr><td><strong>911 / local police</strong></td><td>Always first. File the report where the person was last seen or where they live.</td><td><a href="tel:911">911</a> or the department&apos;s non-emergency line</td></tr>
              <tr><td><strong>NCMEC</strong> — National Center for Missing &amp; Exploited Children</td><td>Any missing child under 18, including runaways. Case managers, poster distribution, and coordination with police. Free.</td><td><a href="tel:18008435678">1-800-THE-LOST</a> (1-800-843-5678) · <a href="https://www.missingkids.org" target="_blank" rel="noopener noreferrer">missingkids.org</a></td></tr>
              <tr><td><strong>NamUs</strong> — National Missing &amp; Unidentified Persons System</td><td>National database run by the Dept. of Justice. Families can register a case directly (it is then verified with police). Free DNA collection for families.</td><td><a href="https://namus.nij.ojp.gov" target="_blank" rel="noopener noreferrer">namus.nij.ojp.gov</a> · 1-833-872-5176</td></tr>
              <tr><td><strong>FBI</strong></td><td>Suspected abduction, trafficking, or if the person may have crossed state lines. Also for tips.</td><td><a href="tel:18002255324">1-800-CALL-FBI</a> · <a href="https://tips.fbi.gov" target="_blank" rel="noopener noreferrer">tips.fbi.gov</a></td></tr>
              <tr><td><strong>National Runaway Safeline</strong></td><td>Teens who may have left on their own; confidential help for the youth and the family.</td><td><a href="tel:18007862929">1-800-RUNAWAY</a> · <a href="https://www.1800runaway.org" target="_blank" rel="noopener noreferrer">1800runaway.org</a></td></tr>
              <tr><td><strong>National Human Trafficking Hotline</strong></td><td>If there are signs the person is being controlled, moved, or exploited.</td><td><a href="tel:18883737888">1-888-373-7888</a> · text 233733</td></tr>
              <tr><td><strong>Black and Missing Foundation</strong></td><td>Advocacy and media help for missing persons of color, whose cases often get less coverage.</td><td><a href="https://blackandmissinginc.com" target="_blank" rel="noopener noreferrer">blackandmissinginc.com</a></td></tr>
              <tr><td><strong>BIA Missing &amp; Murdered Unit</strong> / tribal police</td><td>Cases involving Native people or occurring on tribal lands — jurisdiction can be complicated; ask who has the lead.</td><td><a href="https://www.bia.gov/service/mmu" target="_blank" rel="noopener noreferrer">bia.gov/service/mmu</a></td></tr>
              <tr><td><strong>988 Suicide &amp; Crisis Lifeline</strong></td><td>For you. Waiting is brutal. Call or text, any time.</td><td><a href="tel:988">988</a></td></tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: 48 }}>Find your state&apos;s missing persons clearinghouse</h2>
        <p>
          Every state has a missing persons clearinghouse, usually inside the state police or Department of Public Safety.
          They coordinate between local departments and can issue state-wide alerts. The two directories below are kept current
          by national agencies:
        </p>
        <div className="grid grid-2">
          <div className="card">
            <h4>NamUs state search</h4>
            <p>Search open cases by state and see which agencies are handling them.</p>
            <a className="btn btn-primary" href="https://namus.nij.ojp.gov/search" target="_blank" rel="noopener noreferrer">Open NamUs search</a>
          </div>
          <div className="card">
            <h4>NCMEC clearinghouse directory</h4>
            <p>Phone numbers and websites for every state clearinghouse.</p>
            <a className="btn btn-primary" href="https://www.missingkids.org/footer/about/partners/clearinghouse" target="_blank" rel="noopener noreferrer">Open the directory</a>
          </div>
        </div>
        <p className="small muted" style={{ marginTop: 14 }}>
          Quick search by state: {STATES.map(([c, n], i) => (
            <span key={c}>{i > 0 && " · "}<a href={`https://www.google.com/search?q=${encodeURIComponent(n + " missing persons clearinghouse")}`} target="_blank" rel="noopener noreferrer">{c}</a></span>
          ))}
        </p>
      </div>
    </section>
  );
}
