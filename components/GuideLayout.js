import Link from "next/link";

export default function GuideLayout({ title, intro, children, next }) {
  return (
    <section className="section">
      <div className="container">
        <div className="breadcrumb"><Link href="/resources">Resources</Link> / {title}</div>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
        <div className="prose">{children}</div>
        <div className="grid grid-2" style={{ marginTop: 40 }}>
          <div className="card">
            <h4>Need a flyer?</h4>
            <p>Build and download one in about three minutes.</p>
            <Link href="/flyer" className="btn btn-primary">Flyer Builder</Link>
          </div>
          {next && (
            <div className="card">
              <h4>Next guide</h4>
              <p>{next[1]}</p>
              <Link href={next[0]} className="btn btn-outline">Read it →</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
