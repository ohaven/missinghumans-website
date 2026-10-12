import { site } from "@/data/site";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>Contact</h1>
        <div className="notice notice-urgent">
          <p><strong>We are not a tip line.</strong> If you have information about a missing person, call the agency listed on their case or 911. We cannot act on tips and forwarding them to us delays them reaching investigators.</p>
        </div>
        <p>For everything else — corrections, removal requests, updates (including the good news that someone is home), partnership ideas, or problems with the site:</p>
        <p><a className="btn btn-primary" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
        <p className="muted small">This site is run by volunteers. We read everything, but it may take a day or two to reply.</p>
      </div>
    </section>
  );
}
