"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["/", "Home"],
  ["/resources/first-hours", "What To Do First"],
  ["/flyer", "Flyer Builder"],
  ["/database", "Database"],
  ["/resources", "Resources"],
  ["/submit", "Submit a Case"],
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden>✚</span> Missing Humans
        </Link>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          ☰ Menu
        </button>
        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={(href === "/" ? path === "/" : path.startsWith(href)) ? "active" : ""}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
