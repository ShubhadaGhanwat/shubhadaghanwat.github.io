import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div><div className="footer-brand">SG</div><h3>Shubhada Ghanwat</h3><p>WordPress Developer · Pune, India</p></div>
        <div className="footer-right"><a href="mailto:shubhada.ghanwat7751@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> shubhada.ghanwat7751@gmail.com</a><p>© {year} Shubhada Ghanwat. All rights reserved.</p></div>
        <a className="back-top" href="#home" aria-label="Back to top"><FontAwesomeIcon icon={faArrowUp} /></a>
      </div>
    </footer>
  );
};

export default Footer;
