import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faGaugeHigh,
  faGlobe,
  faLaptopCode,
  faMobileScreenButton,
  faPuzzlePiece,
  faCartShopping,
  faMagnifyingGlassChart,
  faEnvelope,
  faPhone,
  faLocationDot,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "../../index.css";

const skills = [
  "WordPress",
  "Elementor",
  "WooCommerce",
  "PHP",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "MySQL",
  "Yoast SEO",
  "Git & GitHub",
  "cPanel & FTP",
];

const services = [
  {
    icon: faGlobe,
    title: "WordPress Development",
    text: "Responsive business and portfolio websites with clean structure, practical navigation, and easy content management.",
  },
  {
    icon: faCartShopping,
    title: "WooCommerce",
    text: "Store setup, product management, payment gateway integration, and customized shopping experiences.",
  },
  {
    icon: faPuzzlePiece,
    title: "Theme & Plugin Customization",
    text: "Theme customization, plugin configuration, integration, troubleshooting, and feature enhancements.",
  },
  {
    icon: faGaugeHigh,
    title: "Performance & SEO",
    text: "Speed and image optimization with SEO-friendly implementation and practical performance improvements.",
  },
];

const experience = [
  {
    period: "02/2026 – Present",
    role: "Website Developer",
    company: "Techcraftery",
  },
  {
    period: "10/2023 – 07/2025",
    role: "Freelance Web Developer (Part-Time)",
    company: "The Digital Buzz · Remote",
    details: "Designed and maintained responsive business websites, worked on UI improvements, content updates, and SEO optimization.",
  },
  {
    period: "10/2022 – 09/2023",
    role: "Junior Associate – Website Developer",
    company: "AffinityX",
    details: "Developed and enhanced client websites, supported UI integration and backend customization, and collaborated with QA for cross-browser and device testing.",
  },
  {
    period: "05/2022 – 07/2022",
    role: "Web Developer Intern",
    company: "Scriptika Solutions",
    details: "Worked on front-end and back-end modules for e-commerce and ERP websites, including database integration, responsive UI, and performance improvements.",
  },
  {
    period: "10/2020 – 11/2021",
    role: "Web Developer",
    company: "Widefy",
    details: "Worked across UI implementation, backend development, SEO, deployment, production support, and client requirements.",
  },
];

const projectTypes = [
  { icon: faLaptopCode, title: "Business Websites", text: "Professional WordPress websites focused on responsive layouts, clear content, and usability." },
  { icon: faCartShopping, title: "E-commerce Websites", text: "WooCommerce-focused experiences for products, stores, checkout flows, and ongoing management." },
  { icon: faMobileScreenButton, title: "Responsive Landing Pages", text: "Conversion-focused layouts designed to work smoothly across desktop, tablet, and mobile." },
  { icon: faMagnifyingGlassChart, title: "Website Improvements", text: "UI updates, troubleshooting, maintenance, optimization, and SEO-friendly enhancements." },
];

const process = [
  ["01", "Understand", "I first understand the business, users, goals, and required website functionality."],
  ["02", "Plan", "I organize the page structure, content flow, technology, and implementation approach."],
  ["03", "Build", "I develop responsive pages and integrate WordPress, themes, plugins, or WooCommerce features."],
  ["04", "Test & Improve", "I test across browsers and devices, fix issues, and improve performance and usability."],
];

const Home = () => {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">WORDPRESS DEVELOPER · PUNE, INDIA</span>
            <h1>Hello, I’m <span>Shubhada Ghanwat</span></h1>
            <p className="hero-lead">
              I’m a WordPress Developer with 4+ years of experience turning ideas into responsive,
              high-performing websites. I combine clean development, creative design, and user-focused thinking
              to build web experiences that are both visually engaging and functional.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="https://wa.link/nc9da0" target="_blank" rel="noreferrer">
                Let’s Work Together <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a className="secondary-btn" href={`${import.meta.env.BASE_URL}cv.pdf`} download>
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            </div>
            <div className="hero-stats">
              <div><strong>4+</strong><span>Years Experience</span></div>
              <div><strong>WordPress</strong><span>Core Specialization</span></div>
              <div><strong>Full Stack</strong><span>Web Development</span></div>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-glow" />
            <div className="hero-photo-card">
              <img src={`${import.meta.env.BASE_URL}shubhada.png`} alt="Shubhada Ghanwat, WordPress Developer" />
            </div>
            <div className="floating-card">
              <FontAwesomeIcon icon={faCode} />
              <div><strong>Clean & Scalable</strong><span>Web Solutions</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="site-container about-grid">
          <div>
            <span className="section-kicker">ABOUT ME</span>
            <h2>Building websites that work beautifully.</h2>
          </div>
          <div className="about-copy">
            <p>
              I specialize in custom WordPress development, theme customization, plugin integration,
              Elementor, WooCommerce, responsive design, and website maintenance.
            </p>
            <p>
              I enjoy solving website issues, improving performance, working with client requirements,
              and delivering clean, user-friendly and SEO-friendly solutions.
            </p>
            <div className="skill-cloud">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services-section">
        <div className="site-container">
          <div className="section-heading">
            <div><span className="section-kicker">WHAT I DO</span><h2>WordPress solutions for real business needs.</h2></div>
            <p>From a new website to ongoing improvements, I focus on practical development, responsive design, and maintainable solutions.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="icon-box"><FontAwesomeIcon icon={service.icon} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <div className="site-container">
          <div className="section-heading centered">
            <span className="section-kicker">MY JOURNEY</span>
            <h2>Professional Experience</h2>
            <p>Experience across WordPress, web development, e-commerce, client websites, testing, and production support.</p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-dot" />
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  {item.details && <p>{item.details}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section process-section">
        <div className="site-container">
          <div className="section-heading centered light">
            <span className="section-kicker">HOW I WORK</span>
            <h2>A simple process from idea to launch.</h2>
          </div>
          <div className="process-grid">
            {process.map(([number, title, text]) => (
              <article key={number} className="process-card">
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / PORTFOLIO */}
      <section id="portfolio" className="section portfolio-section">
        <div className="site-container">
          <div className="section-heading centered">
            <span className="section-kicker">SELECTED WORK</span>
            <h2>What I can build for you.</h2>
            <p>A selection of the website types and improvements that match my development experience.</p>
          </div>
          <div className="project-grid">
            {projectTypes.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-icon"><FontAwesomeIcon icon={project.icon} /></div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <a href="#contact">Discuss a Project <FontAwesomeIcon icon={faArrowRight} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <div className="site-container education-card">
          <div><span className="section-kicker">EDUCATION</span><h2>M.Sc. Computer Science</h2><p>Savitribai Phule Pune University · 2022</p></div>
          <div className="education-score"><strong>8.50</strong><span>CGPA</span></div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="site-container cta-inner">
          <div><span className="section-kicker">LET’S CONNECT</span><h2>Have a website idea? Let’s build it.</h2><p>I’m available for web development opportunities and freelance projects.</p></div>
          <a className="primary-btn" href="https://wa.link/nc9da0" target="_blank" rel="noreferrer">Start a Conversation <FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="site-container contact-grid">
          <div>
            <span className="section-kicker">CONTACT</span>
            <h2>Let’s discuss your project.</h2>
            <p className="contact-intro">Have a WordPress website, WooCommerce store, redesign, or optimization task in mind? Get in touch.</p>
            <div className="contact-list">
              <a href="mailto:shubhada.ghanwat7751@gmail.com"><FontAwesomeIcon icon={faEnvelope} /><span><small>Email</small>shubhada.ghanwat7751@gmail.com</span></a>
              <a href="tel:+917887546631"><FontAwesomeIcon icon={faPhone} /><span><small>Phone</small>+91 7887546631</span></a>
              <div><FontAwesomeIcon icon={faLocationDot} /><span><small>Location</small>Hadapsar, Pune, India</span></div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/shubhada-ghanwat" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="https://wa.link/nc9da0" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
          <div className="contact-form-card">
            <h3>Send a message</h3>
            <p>For a quick response, WhatsApp or email me directly.</p>
            <a className="primary-btn full" href="https://wa.link/nc9da0" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /> Message on WhatsApp</a>
            <a className="secondary-btn full" href="mailto:shubhada.ghanwat7751@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> Email Me</a>
            <a className="secondary-btn full" href={`${import.meta.env.BASE_URL}cv.pdf`} download><FontAwesomeIcon icon={faDownload} /> Download Resume</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
