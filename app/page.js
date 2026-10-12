import Link from "next/link";
import { cases } from "@/data/cases";
import CaseCard from "@/components/CaseCard";

export default function Home() {
  const recent = cases.filter((c) => c.status !== "found").slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-kicker">Someone you love is missing?</div>
          <h1>Help Bring Them Home</h1>
          <p className="lead">
            Resources, tools, and plain-language guidance for families in the first hours and
            days after a loved one goes missing — free, and built by people who have been there.
          </p>
          <div className="ctas">
            <Link href="/resources/first-hours" className="btn btn-urgent">Start Here: What To Do First</Link>
            <Link href="/flyer" className="btn btn-primary">Create a Flyer Now</Link>
            <Link href="/database" className="btn btn-outline">Search the Database</Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="notice notice-urgent">
            <h3>Right now, in this order</h3>
            <ol className="steps">
              <li><strong>Call the police. Do not wait.</strong> There is no 24-hour or 72-hour waiting period anywhere in the U.S. If the person is a child, an older adult, or has a medical condition, say so immediately — it changes how police respond.</li>
              <li><strong>Get the report number and the officer&apos;s name.</strong> Write them down. Ask that the person be entered into the national NCIC missing persons database.</li>
              <li><strong>Gather a recent photo and a description.</strong> Clothing, height, weight, marks, vehicle, phone number, medications. Then <Link href="/flyer">build a flyer</Link> in about three minutes.</li>
              <li><strong>Start the timeline.</strong> Last confirmed contact, last known location, who saw them last. Save texts, call logs, and social media activity. <Link href="/resources/retracing-steps">How to retrace steps →</Link></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Tools for families</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Flyer Builder</h3>
              <p>Fill in a short form, add a photo, and download a print-ready missing person poster plus a square image for social media. Nothing you enter is uploaded or stored.</p>
              <Link href="/flyer" className="btn btn-primary">Build a flyer</Link>
            </div>
            <div className="card">
              <h3>Missing Persons Database</h3>
              <p>Cases submitted by families and reviewed before posting. Search by name, state, city, or age, and find the right number to call with a tip.</p>
              <Link href="/database" className="btn btn-primary">Search cases</Link>
            </div>
            <div className="card">
              <h3>Guidance &amp; Resources</h3>
              <p>What changes for an adult vs. a child vs. an elder, how to work with police, requesting camera footage, and the national agencies that can help.</p>
              <Link href="/resources" className="btn btn-primary">Read the guides</Link>
            </div>
          </div>
        </div>
      </section>

      {recent.length > 0 && (
        <section className="section-tight">
          <div className="container">
            <h2>Recently posted</h2>
            <div className="case-grid">
              {recent.map((c) => <CaseCard key={c.id} c={c} />)}
            </div>
            <p style={{ marginTop: 18 }}><Link href="/database">View all cases →</Link></p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="card">
            <h2>Why this site exists</h2>
            <p className="lead">
              When my brother went missing, we didn&apos;t know where to start — who to call, what the police needed from us,
              whether the rules were different because he was an adult, or how much the first hours mattered. We learned all of
              it the hard way, in real time.
            </p>
            <p>
              Missing Humans is the guide we wish we&apos;d had: one place with the first steps, the tools to spread the word
              fast, and a way for families to post a case where others can see it. It is free, it always will be, and it is not
              a substitute for law enforcement — it&apos;s what helps you work with them.
            </p>
            <Link href="/submit" className="btn btn-outline">Submit a missing person</Link>
          </div>
        </div>
      </section>
    </>
  );
}
