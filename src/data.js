// Everything the site shows lives here. Edit this file to change the portfolio and the resume.
// PROFILE.name comes from the old portfolio and resume notes: change it here if it should read differently.

export const PROFILE = {
  name: 'Daniel James',
  handle: 'Real-devalex',
  role: 'Full-stack and game developer',
  studio: 'Alexion Studios',
  location: 'Ibadan, Nigeria',
  email: 'alexionstudios@gmail.com',
  github: 'https://github.com/Real-devalex',
  summary:
    'Self-taught full-stack and game developer, final-year B.Sc. Computer Science student and founder of Alexion Studios. I build web apps, mobile apps, game servers and developer tools, from the database and security rules to the interface people touch. I also script SA-MP and FiveM servers, and I turn ideas and dreams into working products for a living.',
}

export const SKILLS = [
  ['Front end', ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML and CSS']],
  ['Back end and data', ['Node.js', 'Supabase', 'PostgreSQL', 'Row level security', 'Drizzle ORM', 'MySQL', 'Python', 'PHP']],
  ['Mobile and desktop', ['React Native', 'Expo', 'Capacitor (Android)', 'C#', '.NET 8', 'C++']],
  ['Game and server development', ['SA-MP (Pawn)', 'FiveM (Lua and JavaScript)', 'MySQL-backed game servers', 'Player account panels', 'C++', 'C#', 'Game design documents']],
  ['Quality and delivery', ['Vitest', 'pytest', 'GitHub Actions', 'Vercel', 'Docker', 'Service workers and offline apps']],
]

// status: Live | In development | Private build.  repo is only set when the repository is public.
export const PROJECTS = [
  {
    slug: 'studynerd', name: 'StudyNerd', kind: 'Web and Android app', status: 'Live', color: '#2ce7da', year: '2026',
    tagline: 'A free study platform for Computer Science students, with an AI tutor named Nerdy.',
    live: 'https://studynerd.vercel.app',
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind v4', 'Supabase', 'Postgres RLS', 'Edge Functions', 'Capacitor', 'Service worker'],
    about: 'Built for Benue State University students. Each course has ready-written lessons with diagrams, worked examples and ten practice questions, so the app teaches even with no AI and no data.',
    highlights: [
      '377 ready lessons across 100 to 400 level, written to one strict format and checked by a build script.',
      'Mock exams built from the lessons, with a readiness score, delayed results and offline self-marking.',
      'Works offline: a service worker and cached lessons, flashcards and exams. Android app updates over the air.',
      'Spaced-repetition flashcards, points and streaks, study groups with a weekly board, an admin dashboard.',
      'Security first: row level security on every table, a locked content policy, staff-only admin functions, account deletion.',
    ],
  },
  {
    slug: 'alexion-trade', name: 'Alexion Trade', kind: 'Trading research tool', status: 'In development', color: '#7aa2ff', year: '2026',
    tagline: 'A personal trading bot built on one rule: never trust a result the test bench has not earned.',
    tech: ['Python 3.14', 'pytest', 'SQLite', 'Web dashboard'],
    about: 'The first version scored well in its own tests and had no real edge. This rebuild starts with an honest test bench, and live trading stays locked until a strategy passes a results-based gate on a demo account.',
    highlights: [
      'Decisions fill at the next candle open, every trade pays spread and slippage, and a stop and a target in one candle counts as the stop.',
      'A lookahead detector hides the future and re-runs each strategy to catch cheating.',
      'A coin-flip control runs beside every strategy, so an edge must beat random.',
      'Results are scored in R with a likely range, not just win rate. 33 tests pass. Paper mode only.',
    ],
  },
  {
    slug: 'everyai', name: 'EveryAI', kind: 'SaaS platform', status: 'Private build', color: '#2ce7da', year: '2026',
    tagline: 'An AI-powered WhatsApp automation platform.',
    tech: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Better Auth', 'Turborepo', 'pnpm', 'Docker', 'Vitest'],
    about: 'Connect a WhatsApp account, set up an AI assistant from a dashboard and let it handle conversations. Organised as a monorepo with separate packages for the database, authentication and services.',
    highlights: ['Monorepo with shared database and auth packages.', 'Modern dashboard on Next.js App Router.', 'Containerised with Docker and tested with Vitest.'],
  },
  {
    slug: 'alx', name: 'ALX, the Alexion Language', kind: 'Programming language', status: 'In development', color: '#a5ff47', year: '2026',
    tagline: 'A native programming language designed and built from scratch.',
    live: 'https://real-devalex.github.io/alx/', repo: 'https://github.com/Real-devalex/alx',
    tech: ['C#', '.NET 8', 'VS Code extension', 'GitHub Pages', 'GitHub Actions'],
    about: 'ALX is a locally running language with its own syntax, interpreter, installer and editor support. Version 0.2.0 added richer control flow. It has documentation and examples.',
    highlights: ['Lexer, parser and interpreter written in C#.', 'Installer scripts and a VS Code language extension.', 'Documentation site published from the repository.'],
  },
  {
    slug: 'union-baptist-college', name: 'Union Baptist College Portal', kind: 'School management system', status: 'Live', color: '#ffb347', year: '2026',
    tagline: 'An academic management and results portal for a secondary school in Ibadan.',
    live: 'https://union-baptist-college.vercel.app', repo: 'https://github.com/Real-devalex/union-baptist-college',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vitest'],
    about: 'Built for Union Baptist College: sign-in, student and result management, and a public landing page with the school branding, deployed on Vercel.',
    highlights: ['Authentication and role-based access on Supabase.', 'Results and academic records management.', 'Tests and linting in the repository.'],
  },
  {
    slug: 'streamly', name: 'Streamly', kind: 'Web app', status: 'Built', color: '#8b5cf6', year: '2026',
    tagline: 'A cinematic movie discovery platform with a premium streaming feel.',
    repo: 'https://github.com/Real-devalex/streamly',
    tech: ['React 19', 'TypeScript', 'Vite 8', 'Tailwind v4', 'Supabase'],
    about: 'Deep black surfaces, purple to cyan gradients, glass panels and spring-eased motion with staggered grid entrances.',
    highlights: ['Polished motion design and glass-morphism interface.', 'Supabase backend with migrations in the repository.', 'Ready to deploy on Vercel with its own configuration.'],
  },
  {
    slug: 'camplugie', name: 'Camplugie Mobile', kind: 'Mobile app', status: 'In development', color: '#ff6b58', year: '2026',
    tagline: 'Native iOS and Android client for a campus social super-app.',
    tech: ['Expo', 'React Native', 'Supabase', 'EAS Build'],
    about: 'Reuses the existing web app backend (same tables, security rules and SQL functions) and builds only the new native presentation layer.',
    highlights: ['Phases 1 to 5 done: onboarding, feed, post creation, profiles and the friend graph.', 'Android build guide and email-verification setup documented.'],
  },
  {
    slug: 'type-to-launch', name: 'Type-to-Launch', kind: 'No-code builder', status: 'Private build', color: '#2ce7da', year: '2026',
    tagline: 'A website builder for small businesses: type what you want and watch the site change.',
    tech: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    about: 'Pick a template, then type plain instructions such as "Change the headline to Best Jollof in Lagos". A split-screen editor shows the live preview, and the site can be published or downloaded.',
    highlights: ['Natural-language edits applied to a live preview.', 'Runs free on Vercel with no paid services required.'],
  },
  {
    slug: 'af-manage', name: 'AF Manage', kind: 'Game', status: 'In development', color: '#22c55e', year: '2026',
    tagline: 'An original football manager game for phone and PC.',
    tech: ['TypeScript', 'React', 'Vite', '3D scenes', 'Vitest'],
    about: 'Planned over 50 design decisions before code. A fully fictional world, a 3D match scene system with a free-kick scene and a movement lab with ten tested movements.',
    highlights: ['Detailed planning and handover documents.', 'Tested animation and scene systems.'],
  },
  {
    slug: 'slime-wrld', name: 'Slime Wrld', kind: 'Game server website', status: 'Private build', color: '#a5ff47', year: '2026',
    tagline: 'The website for a SA-MP roleplay server, with player accounts linked to the game.',
    tech: ['SA-MP', 'Next.js', 'TypeScript', 'MySQL', 'Discord linking'],
    about: 'Players register a user control panel account, verify it with a six-digit code linked to Discord, and manage their in-game characters from the site.',
    highlights: ['Account linking and verification flow.', 'Character creation and switching APIs backed by MySQL.'],
  },
]

// The "player card" on the home page. level is 1 to 5 and is a self rating: change it to match how you see yourself.
export const CLASSES = ['Full-stack dev', 'Game dev', 'Server dev']
export const SKILL_TREE = [
  ['Web apps', 5], ['Backends and data', 4], ['Game servers', 4], ['Mobile', 3], ['Languages and tools', 3],
]

// The game and server section. icon names match the Icon component in main.jsx.
export const GAMEDEV = [
  { icon: 'gamepad', title: 'SA-MP servers', text: 'Roleplay gamemodes in Pawn: jobs, factions, vehicles, inventories and admin tools, backed by MySQL, with web panels where players manage their accounts and characters.', tags: ['Pawn', 'MySQL', 'Gamemodes', 'Player panels'] },
  { icon: 'server', title: 'FiveM resources', text: 'Server-side and client-side resources for FiveM roleplay servers, built with Lua and JavaScript: custom scripts, interfaces and economy systems.', tags: ['Lua', 'JavaScript', 'NUI', 'Resources'] },
  { icon: 'cube', title: 'Games and engines', text: 'Original game ideas taken from design document to playable build: a football manager with 3D match scenes, and ALX, a programming language made for game development.', tags: ['C++', 'C#', 'TypeScript', 'Game design'] },
]

export const PROCESS = [
  ['Plan', 'Ask the hard questions first, write the decisions down and agree what done looks like.'],
  ['Build', 'Small steps, typed code, tests where they matter and security rules written with the data model.'],
  ['Check', 'Run the build, test the flow in a real browser, scan for security holes and fix what is found.'],
  ['Ship', 'Deploy early, watch what breaks and keep improving in the open.'],
]

export const EXPERIENCE = [
  ['Founder and developer', 'Alexion Studios', 'Ongoing', 'Design and build web apps, mobile apps and tools for clients and for the studio. Own products from planning to deployment, including databases, security and releases.'],
]

export const EDUCATION = [['B.Sc. Computer Science (400 level, in progress)', 'Benue State University', 'Current']]
