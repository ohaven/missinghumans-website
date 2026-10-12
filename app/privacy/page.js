import { site } from "@/data/site";
export const metadata = { title: "Privacy & Disclaimer" };
export default function Privacy() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>Privacy &amp; Disclaimer</h1>
        <h2>What we collect</h2>
        <ul>
          <li><strong>Flyer Builder:</strong> nothing. The form, the photo, and the downloads are processed entirely in your browser and are never sent to us.</li>
          <li><strong>Case submissions and contact messages:</strong> what you type into the form, which is delivered to us by email (via a form service). We use it to verify and publish the case and to contact you about it.</li>
          <li><strong>Site analytics:</strong> none at this time. Our hosting provider may keep standard server logs.</li>
        </ul>
        <h2>What we publish</h2>
        <p>Only information you authorized in a case submission. We never publish your home address, and we recommend against publishing personal phone numbers. Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> to correct or remove a case at any time; removals are handled as quickly as we can, usually the same day.</p>
        <h2>Disclaimer</h2>
        <p>Missing Humans is a free community resource created by a family with lived experience. It is not a law-enforcement agency, a licensed investigator, or a legal or medical service. Guidance on this site is general information, not legal advice; laws and procedures vary by state and agency. Case information is submitted by families and reviewed for completeness, but we cannot independently verify every detail. Always report a missing person to law enforcement first and direct all tips to the investigating agency.</p>
        <p className="muted small">© {site.founded} {site.owner}.</p>
      </div>
    </section>
  );
}
