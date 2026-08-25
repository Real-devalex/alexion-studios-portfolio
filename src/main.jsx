import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const services = [
  ['01', 'Websites that convert', 'Fast, responsive websites that make a strong first impression and turn visitors into inquiries.'],
  ['02', 'Web apps that work', 'Practical digital tools built with modern technologies for real people and real businesses.'],
  ['03', 'Interactive experiences', 'Engaging game prototypes and creative digital experiences built for memorable interaction.'],
]

const projects = [
  ['Coming soon', 'The Alexion Studio', 'The digital home for our work, ideas, and the people we help.'],
  ['Concept project', 'Local business website', 'A high-converting website concept designed for a service business.'],
  ['Concept project', 'Creator portfolio', 'A distinctive online home for a creator ready to be taken seriously.'],
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
      <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
    </header>

    <main id="top">
      <section className="hero">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <p className="eyebrow">Independent creative technology studio · Nigeria</p>
        <h1>Ideas with <i>impact.</i><br />Built to move.</h1>
        <p className="hero-copy">Alexion Studios creates polished websites, useful web apps, and interactive digital experiences for ambitious people and businesses.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Start a project <span>↗</span></a>
          <a className="text-link" href="#work">See our work <span>↓</span></a>
        </div>
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
        <div className="section-heading row-heading"><div><p className="eyebrow">Selected work</p><h2>Proof in the <i>making.</i></h2></div><p>New projects are in progress.<br />Follow the journey as the studio grows.</p></div>
        <div className="project-grid">
          {projects.map(([label, name, detail], index) => <article className={`project project-${index + 1}`} key={name}>
            <div className="project-visual"><span>{index === 0 ? 'A' : index === 1 ? '◒' : '✳'}</span></div>
            <div className="project-info"><p>{label}</p><h3>{name}</h3><span>↗</span></div><p className="project-detail">{detail}</p>
          </article>)}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-mark">A<span>✦</span>S</div>
        <div><p className="eyebrow">The studio</p><h2>Small studio.<br /><i>Big intent.</i></h2><p className="about-copy">Alexion Studios is an independent studio founded by Daniel James. We mix development skill with creative thinking to help good ideas look sharp, feel modern, and work in the real world.</p><a className="text-link" href="#contact">Meet the founder <span>↗</span></a></div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">Have an idea?</p><h2>Let’s build<br /><i>something good.</i></h2>
        <p>Tell us what you want to create. We’ll help you find the next step.</p>
        <a className="button button-light" href="mailto:alexionstudios@gmail.com">alexionstudios@gmail.com <span>↗</span></a>
      </section>
    </main>
    <footer><a className="brand" href="#top"><span>✦</span> ALEXION <em>STUDIOS</em></a><p>© 2026 Alexion Studios. Built with purpose.</p><a href="#top">Back to top ↑</a></footer>
  </>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
