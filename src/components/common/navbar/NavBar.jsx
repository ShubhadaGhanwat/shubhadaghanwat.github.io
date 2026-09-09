import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const items = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Experience", "experience"],
  ["Portfolio", "portfolio"],
  ["Contact", "contact"],
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <div className="site-container nav-inner">
        <Link to="home" smooth duration={600} className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">SG</span>
          <span><strong>Shubhada</strong><small>WordPress Developer</small></span>
        </Link>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button>
        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          {items.map(([label, id]) => (
            <Link key={id} to={id} smooth duration={600} offset={-80} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <a className="nav-cta" href="https://wa.link/nc9da0" target="_blank" rel="noreferrer">Let’s Talk</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
