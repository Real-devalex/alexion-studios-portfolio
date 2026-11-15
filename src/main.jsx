import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { PROFILE, SKILLS, PROJECTS, PROCESS, EXPERIENCE, EDUCATION } from './data'
import './styles.css'
import './site.css'

/* ── tiny hash router: #/  #/projects  #/projects/slug  #/resume ───────── */
function useRoute() {
  const read = () => (location.hash.replace(/^#/, '') || '/')
  const [path, setPath] = useState(read)
  useEffect(() => {
    const on = () => { setPath(read()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return path
}

/** Fades a block in when it scrolls into view. */
function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { setOn(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`rv ${on ? 'rv-in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>
}

/** Types a few phrases, one after the other. */
function Typer({ words }) {
  const [i, setI] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const w = words[i % words.length]
    const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1)
      else if (!del) setDel(true)
      else if (n > 0) setN(n - 1)
      else { setDel(false); setI(i + 1) }
    }, !del && n === w.length ? 1400 : del ? 28 : 55)
    return () => clearTimeout(t)
  }, [n, del, i, words])
  const w = words[i % words.length]
  const shown = matchMedia('(prefers-reduced-motion: reduce)').matches ? words[0] : w.slice(0, n)
  return <span className="typer">{shown}<b className="caret" /></span>
}

/* ── shared chrome ───────────────────────────────────────────────── */
function Header({ path }) {
  const links = [['/', 'Home'], ['/projects', 'Projects'], ['/resume', 'Resume']]
  const active = p => (p === '/' ? path === '/' : path.startsWith(p))
  return (
    <header className="nav">
      <a className="brand" href="#/"><span>✦</span> ALEXION <em>STUDIOS</em></a>
      <nav aria-label="Main navigation">
        {links.map(([p, l]) => <a key={p} href={`#${p}`} className={active(p) ? 'on' : ''}>{l}</a>)}
        <a href="#contact" onClick={e => { e.preventDefault(); if (path !== '/') location.hash = '#/'; setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), path === '/' ? 0 : 150) }}>Contact</a>
      </nav>
      <a className="nav-cta" href={`mailto:${PROFILE.email}`}>Hire me <span>↗</span></a>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <a className="brand" href="#/"><span>✦</span> ALEXION <em>STUDIOS</em></a>
      <p>© {new Date().getFullYear()} {PROFILE.studio}. Built with purpose.</p>
      <div className="footer-links"><a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="#/resume">Resume</a></div>
    </footer>
  )
}

function Tags({ list }) { return <div className="project-tech">{list.map(t => <span className="tech-tag" key={t}>{t}</span>)}</div> }
const Status = ({ s }) => <span className={`pill pill-${s.toLowerCase().replace(/\s+/g, '-')}`}>{s}</span>

/* ── project card: a small generated cover, no fake screenshots ───── */
function Cover({ p }) {
  return (
    <div className="cover" style={{ '--c': p.color }}>
      <span className="cover-kind">{p.kind}</span>
      <span className="cover-name">{p.name}</span>
      <span className="cover-grid" aria-hidden />
    </div>
  )
}

function ProjectCard({ p, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <a className="card project-card" href={`#/projects/${p.slug}`} style={{ '--c': p.color }}>
        <Cover p={p} />
        <div className="card-body">
          <div className="card-row"><h3>{p.name}</h3><Status s={p.status} /></div>
          <p>{p.tagline}</p>
          <Tags list={p.tech.slice(0, 4)} />
          <span className="more">Read the case study →</span>
        </div>
      </a>
    </Reveal>
  )
}

/* ── real GitHub numbers, from the public API. Nothing is invented. ── */
function GitHubLive() {
  const [repos, setRepos] = useState(null)
  useEffect(() => {
    let live = true
    fetch(`https://api.github.com/users/${PROFILE.handle}/repos?per_page=100&sort=pushed`)
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(d => { if (live) setRepos(d.filter(r => !r.fork)) })
      .catch(() => { if (live) setRepos([]) })
    return () => { live = false }
  }, [])
  if (!repos || !repos.length) return null
  const count = repos.reduce((a, r) => (r.language ? { ...a, [r.language]: (a[r.language] || 0) + 1 } : a), {})
  const langs = Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, 6)
  return (
    <Reveal className="gh">
      <div className="gh-head"><h3>Live from GitHub</h3><a href={PROFILE.github} target="_blank" rel="noreferrer">@{PROFILE.handle} ↗</a></div>
      <div className="gh-stats">
        <div><b>{repos.length}</b><span>public repositories</span></div>
        <div><b>{langs.length}</b><span>main languages</span></div>
        <div><b>{new Date(repos[0].pushed_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</b><span>last push</span></div>
      </div>
      <div className="gh-langs">{langs.map(([l, n]) => <span key={l}><i style={{ width: `${(n / langs[0][1]) * 100}%` }} />{l} · {n}</span>)}</div>
      <ul className="gh-list">
        {repos.slice(0, 5).map(r => <li key={r.id}><a href={r.html_url} target="_blank" rel="noreferrer">{r.name}</a><span>{r.description || r.language || ''}</span><time>{new Date(r.pushed_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</time></li>)}
      </ul>
    </Reveal>
  )
}

/* ── pages ───────────────────────────────────────────────────────── */
function Home() {
  const featured = PROJECTS.slice(0, 4)
  return (
    <main id="top">
      <section className="hero">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="availability"><span /> Open to jobs and select projects · {PROFILE.location}</div>
        <p className="eyebrow">{PROFILE.role} · {PROFILE.studio}</p>
        <h1 className="hero-h">I build <Typer words={['web apps that work.', 'apps people use daily.', 'secure, offline-ready tools.', 'things from scratch.']} /></h1>
        <p className="hero-copy">{PROFILE.summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#/projects">See my projects <span>↗</span></a>
          <a className="button button-ghost" href="#/resume">View resume</a>
        </div>
        <div className="stat-row">
          {[[String(PROJECTS.length), 'projects built'], ['377', 'lessons in StudyNerd'], [String(PROJECTS.filter(p => p.status === 'Live').length), 'live products'], ['100%', 'self-taught']].map(([n, l], i) => <div key={l} className="stat rv-pop" style={{ animationDelay: `${300 + i * 90}ms` }}><b>{n}</b><span>{l}</span></div>)}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-heading row-heading"><div><p className="eyebrow">Selected work</p><h2>Proof in the <i>making.</i></h2></div><a className="text-link" href="#/projects">All projects <span>↗</span></a></Reveal>
        <div className="grid">{featured.map((p, i) => <ProjectCard key={p.slug} p={p} delay={i * 90} />)}</div>
      </section>

      <section className="section skills-section">
        <Reveal className="section-heading"><p className="eyebrow">Toolbox</p><h2>What I work <i>with.</i></h2></Reveal>
        <div className="skills">
          {SKILLS.map(([group, items], i) => <Reveal key={group} delay={i * 80} className="skill-box"><h3>{group}</h3><Tags list={items} /></Reveal>)}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-heading"><p className="eyebrow">How I work</p><h2>From idea to <i>shipped.</i></h2></Reveal>
        <div className="steps">{PROCESS.map(([t, d], i) => <Reveal key={t} delay={i * 90} className="step"><span>{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
        <GitHubLive />
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">Have a role or an idea?</p><h2>Let's build<br /><i>something good.</i></h2>
        <p>I am open to junior and full-stack roles, internships and freelance projects.</p>
        <div className="contact-links">
          <a className="button button-light" href={`mailto:${PROFILE.email}`}>{PROFILE.email} <span>↗</span></a>
          <a className="button button-github" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub / {PROFILE.handle} <span>↗</span></a>
        </div>
      </section>
    </main>
  )
}

function Projects() {
  const kinds = ['All', ...new Set(PROJECTS.map(p => p.kind))]
  const [k, setK] = useState('All')
  const list = PROJECTS.filter(p => k === 'All' || p.kind === k)
  return (
    <main className="page">
      <p className="eyebrow">Projects</p><h1 className="page-h">Everything I have <i>built.</i></h1>
      <p className="page-sub">Each one has a short case study: what it is, how it is built and what I am proud of. Private builds are described but their code is not public.</p>
      <div className="filters">{kinds.map(x => <button key={x} className={x === k ? 'on' : ''} onClick={() => setK(x)}>{x}</button>)}</div>
      <div className="grid">{list.map((p, i) => <ProjectCard key={p.slug} p={p} delay={i * 50} />)}</div>
    </main>
  )
}

function Project({ slug }) {
  const i = PROJECTS.findIndex(p => p.slug === slug)
  const p = PROJECTS[i]
  if (!p) return <main className="page"><h1 className="page-h">Project not found</h1><a className="text-link" href="#/projects">Back to projects ↗</a></main>
  const next = PROJECTS[(i + 1) % PROJECTS.length]
  return (
    <main className="page narrow" style={{ '--c': p.color }}>
      <a className="text-link back" href="#/projects">← All projects</a>
      <div className="case-head"><Status s={p.status} /><span className="kind">{p.kind} · {p.year}</span></div>
      <h1 className="page-h">{p.name}</h1>
      <p className="lead">{p.tagline}</p>
      <div className="case-actions">
        {p.live && <a className="button button-primary" href={p.live} target="_blank" rel="noreferrer">Open live site <span>↗</span></a>}
        {p.repo && <a className="button button-ghost" href={p.repo} target="_blank" rel="noreferrer">Source on GitHub</a>}
        {!p.repo && !p.live && <span className="note">Private build. Happy to walk through it in an interview.</span>}
      </div>
      <Reveal className="case-block"><h2>What it is</h2><p>{p.about}</p></Reveal>
      <Reveal className="case-block"><h2>What I am proud of</h2><ul>{p.highlights.map(h => <li key={h}>{h}</li>)}</ul></Reveal>
      <Reveal className="case-block"><h2>Built with</h2><Tags list={p.tech} /></Reveal>
      <a className="next-card" href={`#/projects/${next.slug}`}><span>Next project</span><b>{next.name} →</b></a>
    </main>
  )
}

function Resume() {
  return (
    <main className="page narrow resume-page">
      <div className="no-print resume-bar"><div><p className="eyebrow">Resume</p><h1 className="page-h">One page, ready to send.</h1></div><button className="button button-primary" onClick={() => window.print()}>Download as PDF ↓</button></div>
      <p className="no-print page-sub">Press the button, then choose "Save as PDF" in the print window. The layout below is what gets saved.</p>
      <article className="paper">
        <header><h2>{PROFILE.name}</h2><p className="r-role">{PROFILE.role}, founder of {PROFILE.studio}</p>
          <p className="r-contact">{PROFILE.location} · {PROFILE.email} · github.com/{PROFILE.handle}</p></header>
        <section><h3>Summary</h3><p>{PROFILE.summary}</p></section>
        <section><h3>Skills</h3>{SKILLS.map(([g, items]) => <p key={g}><b>{g}:</b> {items.join(', ')}</p>)}</section>
        <section><h3>Selected projects</h3>
          {PROJECTS.slice(0, 6).map(p => <div className="r-item" key={p.slug}><p><b>{p.name}</b> <span>{p.kind}{p.live ? ` · ${p.live.replace('https://', '')}` : ''}</span></p><p>{p.tagline} {p.highlights[0]}</p><p className="r-tech">{p.tech.join(' · ')}</p></div>)}
        </section>
        <section><h3>Experience</h3>{EXPERIENCE.map(([role, org, when, text]) => <div className="r-item" key={role}><p><b>{role}</b>, {org} <span>{when}</span></p><p>{text}</p></div>)}</section>
        {EDUCATION.length > 0 && <section><h3>Education</h3>{EDUCATION.map(([what, where, when]) => <p key={what}><b>{what}</b>, {where} <span>{when}</span></p>)}</section>}
      </article>
    </main>
  )
}

function App() {
  const path = useRoute()
  const parts = path.split('/').filter(Boolean)
  useEffect(() => { document.title = parts[0] === 'projects' ? `${parts[1] ? (PROJECTS.find(p => p.slug === parts[1])?.name ?? 'Project') : 'Projects'} · ${PROFILE.name}` : parts[0] === 'resume' ? `Resume · ${PROFILE.name}` : `${PROFILE.name} · ${PROFILE.role}` }, [path])
  return (
    <>
      <Header path={path} />
      {parts[0] === 'projects' ? (parts[1] ? <Project slug={parts[1]} /> : <Projects />) : parts[0] === 'resume' ? <Resume /> : <Home />}
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
