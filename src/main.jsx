import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const services = [
  ['01', 'Websites that convert', 'Fast, responsive websites that make a strong first impression and turn visitors into inquiries.'],
  ['02', 'Web apps that work', 'Practical digital tools built with modern technologies for real people and real businesses.'],
  ['03', 'Interactive experiences', 'Engaging game prototypes and creative digital experiences built for memorable interaction.'],
]

const projects = [
  {
    label: 'Featured project',
    name: 'EveryAI',
    tagline: 'Your WhatsApp, Supercharged',
    detail: 'AI-powered WhatsApp automation platform. Connect your WhatsApp, configure an AI assistant, and automate conversations with intelligence. Built with Next.js, TypeScript, SQLite, and Groq AI.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'SQLite', 'Groq AI', 'Baileys'],
    icon: '✦',
    color: '#2ce7da',
    link: 'https://github.com/Real-devalex/EveryAI',
    status: 'Live',
  },
  {
    label: 'Mobile app',
    name: 'ADROP',
    tagline: 'Seamless file transfer',
    detail: 'A cross-platform file transfer app built with Expo and React Native. Share files between devices quickly and securely with a clean, modern interface.',
    tech: ['Expo', 'React Native', 'TypeScript', 'Android', 'iOS'],
    icon: '↗',
    color: '#ff6b58',
    link: null,
    status: 'In development',
  },
  {
    label: 'Coming soon',
    name: 'The Alexion Studio',
    tagline: 'The digital home for our work',
    detail: 'The full Alexion Studios website — a showcase of our services, process, and the people we help. Currently in planning.',
    tech: ['Next.js', 'React', 'Design System'],
    icon: 'A',
    color: '#805dff',
    link: null,
    status: 'Planning',
  },
]

function App() {
  return <>
    <header className="nav">
      <a className="brand" href="#top"><span>✦</span> ALEXION <em>STUDIOS</em></a>
      <nav aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
      </nav>
      <a className="nav-cta" href="#contact">Let's talk <span>↗</span></a>
    </header>

    <main id="top">
      <section className="hero">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="availability"><span /> Available for select projects · Ibadan, Nigeria</div>
        <p className="eyebrow">Independent creative technology studio</p>
        <h1>Ideas with <i>impact.</i><br />Built to move.</h1>
        <p className="hero-copy">Alexion Studios creates polished websites, useful web apps, and interactive digital experiences for ambitious people and businesses.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Start a project <span>↗</span></a>
          <a className="text-link" href="#work">See our work <span>↓</span></a>
        </div>
        <div className="hero-orbit"><span>WEB · APPS · GAMES · CREATIVE TECH ·</span><b>✦</b></div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="intro-band">
        <p>Built with curiosity, taste, and a focus on what actually matters: work that looks exceptional and works beautifully.</p>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading"><p className="eyebrow">What we do</p><h2>Digital work that<br /><i>stands apart.</i></h2></div>
        <div className="service-grid">
          {services.map(([number, title, text]) => <article className="service-card" key={number}>
            <span className="service-number">{number}</span><span className="arrow">↗</span>
            <h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading row-heading"><div><p className="eyebrow">Selected work</p><h2>Proof in the <i>making.</i></h2></div><p>Real projects, real code.<br />Built to solve real problems.</p></div>
        <div className="project-grid">
          {projects.map((project, index) => <article className={`project project-${index + 1}`} key={project.name}>
            <div className="project-visual" style={{ background: project.color + '22' }}>
              <span style={{ color: project.color }}>{project.icon}</span>
            </div>
            <div className="project-info">
              <p>{project.label}</p>
              <h3>{project.name}</h3>
              <span>↗</span>
            </div>
            <p className="project-detail">{project.detail}</p>
            <div className="project-tech">
              {project.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
            </div>
            <div className="project-meta">
              <span className="project-status">{project.status}</span>
              {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View on GitHub ↗</a>}
            </div>
          </article>)}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-mark">A<span>✦</span>S</div>
        <div><p className="eyebrow">The studio</p><h2>Small studio.<br /><i>Big intent.</i></h2><p className="about-copy">Alexion Studios is an independent studio founded by Daniel James. We mix development skill with creative thinking to help good ideas look sharp, feel modern, and work in the real world.</p><a className="text-link" href="#contact">Meet the founder <span>↗</span></a></div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">Have an idea?</p><h2>Let's build<br /><i>something good.</i></h2>
        <p>Tell us what you want to create. We'll help you find the next step.</p>
        <div className="contact-links">
          <a className="button button-light" href="mailto:alexionstudios@gmail.com">alexionstudios@gmail.com <span>↗</span></a>
          <a className="button button-github" href="https://github.com/Real-devalex" target="_blank" rel="noreferrer">GitHub / Real-devalex <span>↗</span></a>
        </div>
      </section>
    </main>
    <footer><a className="brand" href="#top"><span>✦</span> ALEXION <em>STUDIOS</em></a><p>© 2026 Alexion Studios. Built with purpose.</p><div className="footer-links"><a href="https://github.com/Real-devalex" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></div></footer>
  </>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
