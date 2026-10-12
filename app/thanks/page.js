import Link from "next/link";
export const metadata = { title: "Thank you" };
export default function Thanks() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>We received it</h1>
        <p className="lead">Thank you. A person will review the submission — usually within 24 hours — and may call to confirm details before it is posted.</p>
        <p>In the meantime:</p>
        <ul>
          <li><Link href="/flyer">Build and share a flyer</Link> right now — you don&apos;t need to wait for us.</li>
          <li>Make sure the case is registered on <a href="https://namus.nij.ojp.gov" target="_blank" rel="noopener noreferrer">NamUs</a> (adults) or with <a href="https://www.missingkids.org" target="_blank" rel="noopener noreferrer">NCMEC</a> (children).</li>
          <li>Read <Link href="/resources/retracing-steps">Retracing Their Steps</Link> — camera footage is overwritten fast.</li>
        </ul>
        <Link href="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
