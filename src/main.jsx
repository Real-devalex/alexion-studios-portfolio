import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GitHubActivity from './GitHubActivity'
import './styles.css'

const services = [
  ['01', 'Websites that convert', 'Fast, responsive websites that make a strong first impression and turn visitors into inquiries.'],
  ['02', 'Web apps that work', 'Practical digital tools built with modern technologies for real people and real businesses.'],
  ['03', 'Interactive experiences', 'Engaging game prototypes and creative digital experiences built for memorable interaction.'],
]

/* ── SVG project mockups ─────────────────────────────── */

function EveryAIVisual() {
  return (
    <svg viewBox="0 0 600 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      {/* Background */}
      <rect width="600" height="370" rx="8" fill="#0a1628" />
      {/* Sidebar */}
      <rect x="0" y="0" width="160" height="370" fill="#0d1f35" />
      <rect x="16" y="20" width="80" height="14" rx="3" fill="#2ce7da" opacity=".9" />
      <text x="16" y="26" fill="#0a1628" fontSize="8" fontFamily="monospace" fontWeight="bold">EveryAI</text>
      {/* Nav items */}
      {[50, 78, 106, 134, 162].map((y, i) => (
        <g key={i}>
          <rect x="16" y={y} width={i === 1 ? "128" : "100"} height="20" rx="4" fill={i === 1 ? "rgba(44,231,218,.12)" : "transparent"} />
          <rect x="24" y={y + 7} width={40 + i * 5} height="5" rx="2" fill={i === 1 ? "#2ce7da" : "#2a4050"} opacity={i === 1 ? ".8" : ".5"} />
        </g>
      ))}
      {/* Main content area */}
      <rect x="176" y="16" width="408" height="36" rx="6" fill="#111d30" />
      <text x="192" y="38" fill="#8aa4b4" fontSize="9" fontFamily="sans-serif">WhatsApp Connection</text>
      {/* Status card */}
      <rect x="176" y="64" width="408" height="60" rx="6" fill="#111d30" />
      <circle cx="204" cy="94" r="8" fill="#22c55e" opacity=".8" />
      <rect x="220" y="84" width="80" height="7" rx="2" fill="#e2e8f0" opacity=".6" />
      <rect x="220" y="96" width="50" height="5" rx="2" fill="#64748b" opacity=".4" />
      <rect x="500" y="86" width="60" height="18" rx="9" fill="#2ce7da" opacity=".2" />
      <text x="516" y="98" fill="#2ce7da" fontSize="7" fontFamily="monospace">Connected</text>
      {/* Stats row */}
      {[176, 280, 384, 488].map((x, i) => (
        <g key={i}>
          <rect x={x} y="140" width="96" height="50" rx="6" fill="#111d30" />
          <rect x={x + 12} y={152} width={20 + i * 4} height="12" rx="2" fill="#e2e8f0" opacity=".7" />
          <rect x={x + 12} y={170} width={35} height="5" rx="2" fill="#64748b" opacity=".3" />
        </g>
      ))}
      {/* Chat area */}
      <rect x="176" y="204" width="260" height="150" rx="6" fill="#111d30" />
      {/* Incoming message */}
      <rect x="188" y="218" width="140" height="28" rx="10" fill="#1a3050" />
      <rect x="198" y="226" width="90" height="5" rx="2" fill="#8aa4b4" opacity=".6" />
      <rect x="198" y="236" width="60" height="4" rx="2" fill="#64748b" opacity=".3" />
      {/* Outgoing AI message */}
      <rect x="276" y="258" width="150" height="34" rx="10" fill="rgba(44,231,218,.1)" />
      <rect x="286" y="266" width="110" height="5" rx="2" fill="#2ce7da" opacity=".6" />
      <rect x="286" y="276" width="80" height="4" rx="2" fill="#2ce7da" opacity=".3" />
      <text x="286" y="296" fill="#2ce7da" fontSize="6" fontFamily="monospace" opacity=".5">AI generated</text>
      {/* Another exchange */}
      <rect x="188" y="302" width="110" height="24" rx="10" fill="#1a3050" />
      <rect x="198" y="310" width="70" height="5" rx="2" fill="#8aa4b4" opacity=".5" />
      <rect x="306" y="334" width="130" height="28" rx="10" fill="rgba(44,231,218,.1)" />
      <rect x="316" y="342" width="100" height="5" rx="2" fill="#2ce7da" opacity=".5" />
      {/* Settings panel */}
      <rect x="448" y="204" width="136" height="150" rx="6" fill="#111d30" />
      <rect x="460" y="216" width="60" height="6" rx="2" fill="#8aa4b4" opacity=".5" />
      {[234, 258, 282, 306].map((y, i) => (
        <g key={i}>
          <rect x="460" y={y} width="112" height="16" rx="4" fill={i === 0 ? "rgba(44,231,218,.08)" : "#0d1a2e"} />
          <rect x="468" y={y + 5} width={30 + i * 8} height="5" rx="2" fill={i === 0 ? "#2ce7da" : "#3a5060"} opacity=".6" />
        </g>
      ))}
    </svg>
  )
}

function ADROPVisual() {
  return (
    <svg viewBox="0 0 600 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <rect width="600" height="370" rx="8" fill="#1a0f0a" />
      {/* Phone frame */}
      <rect x="210" y="20" width="180" height="330" rx="24" fill="#0d0d0d" stroke="#333" strokeWidth="2" />
      <rect x="218" y="32" width="164" height="306" rx="16" fill="#111" />
      {/* Status bar */}
      <text x="232" y="50" fill="#fff" fontSize="7" fontFamily="sans-serif">9:41</text>
      <rect x="340" y="42" width="28" height="10" rx="3" fill="none" stroke="#fff" strokeWidth="1" opacity=".4" />
      {/* Notch */}
      <rect x="270" y="22" width="60" height="8" rx="4" fill="#000" />
      {/* App header */}
      <rect x="218" y="58" width="164" height="40" fill="#ff6b58" />
      <text x="258" y="82" fill="#fff" fontSize="14" fontFamily="sans-serif" fontWeight="bold">ADROP</text>
      <circle cx="350" cy="78" r="8" fill="rgba(255,255,255,.2)" />
      {/* File cards */}
      {[110, 155, 200].map((y, i) => (
        <g key={i}>
          <rect x="230" y={y} width="140" height="36" rx="8" fill="#1e1412" stroke="#3a2520" strokeWidth="1" />
          <rect x="240" y={y + 8} width="20" height="20" rx="4" fill={["#ff6b58", "#ffb347", "#ff6b58"][i]} opacity=".2" />
          <text x="245" y={y + 22} fill={["#ff6b58", "#ffb347", "#ff6b58"][i]} fontSize="10" fontFamily="sans-serif">
            {["📄", "🖼️", "📦"][i]}
          </text>
          <rect x="268" y={y + 8} width={50 + i * 10} height="6" rx="2" fill="#e2e8f0" opacity=".5" />
          <rect x="268" y={y + 20} width="30" height="4" rx="2" fill="#888" opacity=".3" />
          <circle cx="354" cy={y + 18} r="6" fill="none" stroke="#ff6b58" strokeWidth="1.5" opacity=".5" />
        </g>
      ))}
      {/* Send button */}
      <rect x="258" y="254" width="84" height="30" rx="15" fill="#ff6b58" />
      <text x="279" y="273" fill="#fff" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Send</text>
      {/* Bottom nav */}
      <rect x="218" y="302" width="164" height="36" fill="#0d0d0d" />
      {[250, 282, 314, 346].map((x, i) => (
        <circle key={i} cx={x} cy="320" r="4" fill={i === 0 ? "#ff6b58" : "#444"} />
      ))}
      {/* Floating transfer indicator */}
      <circle cx="490" cy="120" r="40" fill="rgba(255,107,88,.08)" stroke="rgba(255,107,88,.2)" strokeWidth="1" />
      <text x="476" y="125" fill="#ff6b58" fontSize="22">↗</text>
      <text x="470" y="145" fill="#ff6b58" fontSize="7" fontFamily="monospace" opacity=".6">TRANSFER</text>
      {/* Arrow connecting */}
      <path d="M395 185 Q430 160 455 140" stroke="#ff6b58" strokeWidth="1.5" fill="none" opacity=".3" strokeDasharray="4 3" />
      {/* Speed lines */}
      {[160, 180, 200].map((y, i) => (
        <line key={i} x1={420 + i * 8} y1={y} x2={440 + i * 8} y2={y} stroke="#ff6b58" strokeWidth="1" opacity={.15 + i * .1} />
      ))}
    </svg>
  )
}

function StudioVisual() {
  return (
    <svg viewBox="0 0 600 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <rect width="600" height="370" rx="8" fill="#0f0a1e" />
      {/* Browser chrome */}
      <rect x="0" y="0" width="600" height="32" fill="#1a1530" rx="8" />
      <rect x="0" y="24" width="600" height="8" fill="#1a1530" />
      <circle cx="20" cy="14" r="5" fill="#ff5f57" />
      <circle cx="38" cy="14" r="5" fill="#febc2e" />
      <circle cx="56" cy="14" r="5" fill="#28c840" />
      <rect x="120" y="7" width="360" height="16" rx="8" fill="#0d0a18" />
      <text x="250" y="18" fill="#666" fontSize="7" fontFamily="monospace">alexionstudios.com</text>
      {/* Nav bar */}
      <rect x="0" y="32" width="600" height="36" fill="#12101e" />
      <text x="30" y="54" fill="#805dff" fontSize="9" fontFamily="monospace" fontWeight="bold">✦ ALEXION</text>
      {["Services", "Work", "About", "Contact"].map((t, i) => (
        <text key={i} x={340 + i * 60} y="54" fill="#666" fontSize="8" fontFamily="sans-serif">{t}</text>
      ))}
      {/* Hero section */}
      <text x="60" y="110" fill="#805dff" fontSize="7" fontFamily="monospace" letterSpacing="2">INDEPENDENT STUDIO</text>
      <text x="60" y="140" fill="#f0eef5" fontSize="28" fontFamily="sans-serif" fontWeight="500">Ideas with</text>
      <text x="240" y="140" fill="#805dff" fontSize="28" fontFamily="serif" fontStyle="italic">impact.</text>
      <text x="60" y="170" fill="#f0eef5" fontSize="28" fontFamily="sans-serif" fontWeight="500">Built to move.</text>
      <rect x="60" y="190" width="120" height="28" rx="14" fill="#805dff" />
      <text x="82" y="208" fill="#fff" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Start a project ↗</text>
      {/* Grid pattern */}
      {[80, 130, 180, 230, 280, 330, 380, 430, 480, 530].map((x, i) => (
        <line key={i} x1={x} y1="32" x2={x} y2="370" stroke="#805dff" strokeWidth=".3" opacity=".1" />
      ))}
      {[60, 100, 140, 180, 220, 260, 300, 340].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="600" y2={y} stroke="#805dff" strokeWidth=".3" opacity=".1" />
      ))}
      {/* Floating orb */}
      <circle cx="480" cy="130" r="60" fill="none" stroke="#805dff" strokeWidth=".5" opacity=".3" />
      <circle cx="480" cy="130" r="40" fill="none" stroke="#805dff" strokeWidth=".5" opacity=".2" />
      <circle cx="480" cy="130" r="4" fill="#805dff" opacity=".6" />
      {/* Bottom section preview */}
      <rect x="0" y="260" width="600" height="110" fill="#ece9e0" />
      <text x="60" y="290" fill="#15171a" fontSize="18" fontFamily="sans-serif" fontWeight="500">Small studio. <tspan fill="#805dff" fontFamily="serif" fontStyle="italic">Big intent.</tspan></text>
      <rect x="60" y="306" width="180" height="4" rx="2" fill="#ccc" opacity=".4" />
      <rect x="60" y="316" width="140" height="4" rx="2" fill="#ccc" opacity=".3" />
    </svg>
  )
}

const projects = [
  {
    label: 'Featured project',
    name: 'EveryAI',
    tagline: 'Your WhatsApp, Supercharged',
    detail: 'AI-powered WhatsApp automation platform. Connect your WhatsApp, configure an AI assistant, and automate conversations with intelligence. Built with Next.js, TypeScript, SQLite, and Groq AI.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'SQLite', 'Groq AI', 'Baileys'],
    Visual: EveryAIVisual,
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
    Visual: ADROPVisual,
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
    Visual: StudioVisual,
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
          {projects.map((project, index) => {
            const Vis = project.Visual
            return <article className={`project project-${index + 1}`} key={project.name}>
              <div className="project-visual">
                <Vis />
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
            </article>
          })}
        </div>
        <GitHubActivity />
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
