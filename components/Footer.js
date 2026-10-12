import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Missing Humans</h4>
            <p>{site.tagline}</p>
            <p className="small">Built by a family that has been through it. Free to use, always.</p>
          </div>
          <div>
            <h4>Tools</h4>
            <ul>
              <li><Link href="/flyer">Flyer Builder</Link></li>
              <li><Link href="/database">Missing Persons Database</Link></li>
              <li><Link href="/submit">Submit a Case</Link></li>
            </ul>
          </div>
          <div>
            <h4>Guidance</h4>
            <ul>
              <li><Link href="/resources/first-hours">The First Hours</Link></li>
              <li><Link href="/resources/adult-child-elder">Adult vs. Child vs. Elder</Link></li>
              <li><Link href="/resources/working-with-police">Working With Police</Link></li>
              <li><Link href="/resources">All Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4>National Hotlines</h4>
            <ul>
              <li>Emergency: <a href="tel:911">911</a></li>
              <li>NCMEC (children): <a href="tel:18008435678">1-800-THE-LOST</a></li>
              <li>FBI tips: <a href="tel:18002255324">1-800-CALL-FBI</a></li>
              <li>Crisis support: <a href="tel:988">988</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Missing Humans is a free community resource and is not a law-enforcement agency. Always report a missing person to police first.
            Information in the database is submitted by families and reviewed before posting, but we cannot independently verify every detail.
            {" "}<Link href="/privacy">Privacy &amp; disclaimer</Link> · <Link href="/contact">Contact</Link>
          </p>
          <p>© {site.founded} {site.owner}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
