import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { ASSETS } from "../config/upload";

const links = [
  { label: "Home", to: "/", end: true },
  { label: "Modules", to: "/modules", end: false },
  { label: "Experiments", to: "/experiments", end: false },
  { label: "Tools", to: "/tools", end: false },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isLinkActive = (to: string, end: boolean) => {
    if (end) return location.pathname === "/";
    return to === "/experiments"
      ? location.pathname.startsWith(to)
      : location.pathname === to;
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink
          className="brand-mark"
          to="/"
          aria-label="MBU Data Science Laboratory home"
          onClick={() => setMenuOpen(false)}
        >
          <img src={ASSETS.mbuLogo} alt="Mohan Babu University" />
        </NavLink>

        <div className="header-title">
          <span>Data Science Laboratory</span>
          <small>Subject Code: 22DS102006</small>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={() =>
                `nav-link${isLinkActive(link.to, link.end) ? " is-active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
