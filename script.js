const files = {
  'home.tsx': { label: 'home.tsx', lang: 'TypeScript React', badge: 'TSX', path: ['home.tsx'], kind: 'preview', title: 'home' },
  'about.html': { label: 'about.html', lang: 'HTML', badge: 'HTML', path: ['about.html'], kind: 'preview', title: 'about' },
  'projects/agent-framework.md': { label: 'agent-framework.md', lang: 'Markdown', badge: 'MD', path: ['projects', 'agent-framework.md'], kind: 'preview', title: 'agent' },
  'projects/medtwin.md': { label: 'medtwin.md', lang: 'Markdown', badge: 'MD', path: ['projects', 'medtwin.md'], kind: 'preview', title: 'medtwin' },
  'projects/product-store.md': { label: 'product-store.md', lang: 'Markdown', badge: 'MD', path: ['projects', 'product-store.md'], kind: 'preview', title: 'store' },
  'skills.json': { label: 'skills.json', lang: 'JSON', badge: 'JSON', path: ['skills.json'], kind: 'preview', title: 'skills' },
  'experience.ts': { label: 'experience.ts', lang: 'TypeScript', badge: 'TS', path: ['experience.ts'], kind: 'preview', title: 'experience' },
  'research.md': { label: 'research.md', lang: 'Markdown', badge: 'MD', path: ['research.md'], kind: 'preview', title: 'research' },
  'certifications.md': { label: 'certifications.md', lang: 'Markdown', badge: 'MD', path: ['certifications.md'], kind: 'preview', title: 'certifications' },
  'education.md': { label: 'education.md', lang: 'Markdown', badge: 'MD', path: ['education.md'], kind: 'preview', title: 'education' },
  'contact.ts': { label: 'contact.ts', lang: 'TypeScript', badge: 'TS', path: ['contact.ts'], kind: 'preview', title: 'contact' },
  'README.md': { label: 'README.md', lang: 'Markdown', badge: 'MD', path: ['README.md'], kind: 'preview', title: 'readme' },
  'resume.pdf': { label: 'resume.pdf', lang: 'PDF', badge: 'PDF', path: ['resume.pdf'], kind: 'resume', title: 'resume' }
};

const folderTree = [
  { type: 'file', key: 'home.tsx' }, { type: 'file', key: 'about.html' },
  { type: 'folder', label: 'projects', children: [
    { type: 'file', key: 'projects/agent-framework.md' }, { type: 'file', key: 'projects/medtwin.md' }, { type: 'file', key: 'projects/product-store.md' }
  ] },
  { type: 'file', key: 'skills.json' }, { type: 'file', key: 'experience.ts' }, { type: 'file', key: 'research.md' },
  { type: 'file', key: 'certifications.md' }, { type: 'file', key: 'education.md' }, { type: 'file', key: 'contact.ts' },
  { type: 'file', key: 'README.md' }, { type: 'file', key: 'resume.pdf' }
];

const preview = {
  home: `<div class="preview"><div class="eyebrow">// hello world - welcome to my portfolio</div><h1>Varashree<br><span>H A</span></h1><div class="role-row"><span class="role-pill">AI Engineer</span><span class="role-pill">Research Enthusiast</span><span class="role-pill">Full Stack Developer</span></div><div class="meta-row"><span>Bangalore, India</span><span>varashree710@gmail.com</span><span>linkedin.com/in/varashree01</span></div><div class="typing" id="typing"></div><p>I am a Computer Science undergraduate focused on <b class="strong">Artificial Intelligence</b>, <b class="strong">intelligent systems</b>, and <b class="strong">full-stack engineering</b>. My interests sit across <b class="strong">Multi-Agent Systems</b>, <b class="strong">Healthcare AI</b>, <b class="strong">Digital Twins</b>, and <b class="strong">distributed AI</b>.</p><div class="cta-row"><button class="action-button primary" data-open="projects/agent-framework.md">Open projects</button><button class="action-button" data-open="about.html">Open about</button><button class="action-button" data-open="contact.ts">Contact</button></div><div class="stats"><div class="stat"><strong>9.5</strong><span>CGPA</span></div><div class="stat"><strong>3</strong><span>Projects</span></div><div class="stat"><strong>5</strong><span>Research areas</span></div><div class="stat"><strong>infinity</strong><span>Curiosity</span></div></div><div class="social-row"><a class="social-link" href="https://github.com/Varashree01" target="_blank" rel="noopener">GitHub</a><a class="social-link" href="https://linkedin.com/in/varashree01" target="_blank" rel="noopener">LinkedIn</a><a class="social-link" href="mailto:varashree710@gmail.com">Email</a><a class="social-link" href="#resume" data-resume>Resume</a></div><div class="section"><h2>Quick access</h2><div class="quick-grid"><button class="quick-card" data-open="projects/agent-framework.md"><span class="tag">PROJECTS/</span><h3>Selected work</h3><p>AI, healthcare, and full-stack systems.</p></button><button class="quick-card" data-open="skills.json"><span class="tag">JSON</span><h3>Skills</h3><p>Languages, AI/ML, backend, and frontend.</p></button><button class="quick-card" data-open="research.md"><span class="tag">MD</span><h3>Research</h3><p>Questions behind the builds.</p></button><button class="quick-card" data-open="experience.ts"><span class="tag">TS</span><h3>Experience</h3><p>AI Engineering Intern profile.</p></button></div></div></div>`,
  about: `<div class="preview"><div class="eyebrow">&lt;!-- about.html --&gt;</div><h2>About Me</h2><p>Hi, I am <b class="strong">Varashree H A</b>, a Computer Science undergraduate focused on <b class="strong">Artificial Intelligence</b>, <b class="strong">intelligent systems</b>, and <b class="strong">full-stack engineering</b>.</p><p>I am especially interested in <b class="strong">Multi-Agent Systems</b>, <b class="strong">Healthcare AI</b>, <b class="strong">Digital Twins</b>, and <b class="strong">Distributed AI</b>. I enjoy turning research ideas into working systems with thoughtful architecture and user experience.</p><div class="section"><h2>Current focus</h2><div class="interest-grid"><div class="interest-card"><span class="tag">AI</span><h3>Multi-agent workflows</h3><p>Supervisor-worker orchestration, reasoning loops, and team-based agent designs.</p></div><div class="interest-card"><span class="tag">HEALTH</span><h3>Healthcare AI</h3><p>Translating AI capabilities into clinically relevant, grounded systems.</p></div><div class="interest-card"><span class="tag">SYSTEMS</span><h3>Distributed AI</h3><p>Building scalable patterns that connect intelligence, APIs, and products.</p></div><div class="interest-card"><span class="tag">RESEARCH</span><h3>Explainable AI</h3><p>Making the reasoning behind intelligent systems more transparent.</p></div></div></div></div>`,
  agent: `<div class="preview"><div class="eyebrow">// projects/agent-framework.md</div><h2>Multi-Agent AI Orchestration Framework</h2><p>A collaborative multi-agent AI framework using LangChain, supervisor-worker orchestration, external API integration, Flask, and React.</p><div class="chip-row"><span class="chip">LangChain</span><span class="chip">LangGraph</span><span class="chip">Flask</span><span class="chip">React</span><span class="chip">REST APIs</span></div></div>`,
  medtwin: `<div class="preview"><div class="eyebrow">// projects/medtwin.md</div><h2>MedTwin AI</h2><p>A healthcare digital twin concept focused on patient-centric intelligence and grounded AI-driven insight generation.</p><div class="chip-row"><span class="chip">Healthcare AI</span><span class="chip">Digital Twins</span><span class="chip">RAG</span></div></div>`,
  store: `<div class="preview"><div class="eyebrow">// projects/product-store.md</div><h2>Product Store</h2><p>A MERN application with product, cart, and user flows built end-to-end for real business workflows.</p><div class="chip-row"><span class="chip">MongoDB</span><span class="chip">Express.js</span><span class="chip">React</span><span class="chip">Node.js</span></div></div>`,
  skills: `<div class="preview"><div class="eyebrow">{ "status": "always_learning" }</div><h2>Skills</h2><div class="skill-row"><div class="skill-head"><span>Python</span><span>90%</span></div><div class="bar"><span style="width:90%"></span></div></div><div class="skill-row"><div class="skill-head"><span>JavaScript</span><span>82%</span></div><div class="bar"><span style="width:82%"></span></div></div><div class="skill-row"><div class="skill-head"><span>C++</span><span>70%</span></div><div class="bar"><span style="width:70%"></span></div></div><div class="skill-row"><div class="skill-head"><span>React</span><span>80%</span></div><div class="bar"><span style="width:80%"></span></div></div><div class="skill-row"><div class="skill-head"><span>Flask</span><span>82%</span></div><div class="bar"><span style="width:82%"></span></div></div><div class="skill-row"><div class="skill-head"><span>Node.js</span><span>76%</span></div><div class="bar"><span style="width:76%"></span></div></div><div class="skill-row"><div class="skill-head"><span>MongoDB</span><span>74%</span></div><div class="bar"><span style="width:74%"></span></div></div><div class="skill-row"><div class="skill-head"><span>LangChain</span><span>86%</span></div><div class="bar"><span style="width:86%"></span></div></div></div>`,
  experience: `<div class="preview"><div class="eyebrow">interface Experience { role: 'AI Engineering Intern' }</div><h2>Experience</h2><div class="timeline"><div class="timeline-item"><div class="timeline-date">Nov 2025 to Jan 2026</div><h3>AI Engineering Intern</h3><div class="timeline-role">Multi-Agent Systems and Backend Orchestration</div><p>Built a collaborative multi-agent AI framework using LangChain, supervisor-worker orchestration, external API integrations, Flask, and React.</p></div></div><div class="chip-row"><span class="chip">LangChain</span><span class="chip">LangGraph</span><span class="chip">Flask</span><span class="chip">React</span><span class="chip">REST APIs</span></div></div>`,
  research: `<div class="preview"><div class="eyebrow"># research-interests</div><h2>Research Interests</h2><div class="interest-grid"><div class="interest-card"><span class="tag">R.01</span><h3>Multi-Agent Systems</h3><p>Designing coordinated agent-based architectures for real tasks.</p></div><div class="interest-card"><span class="tag">R.02</span><h3>Healthcare AI</h3><p>Applying AI to clinical contexts with grounded reasoning.</p></div><div class="interest-card"><span class="tag">R.03</span><h3>Digital Twins</h3><p>Creating living models of systems that evolve with real-world data.</p></div><div class="interest-card"><span class="tag">R.04</span><h3>Distributed AI</h3><p>Scaling intelligence across systems and services.</p></div><div class="interest-card"><span class="tag">R.05</span><h3>Explainable AI</h3><p>Making decisions understandable and accountable.</p></div></div></div>`,
  certifications: `<div class="preview"><div class="eyebrow"># certifications.md</div><h2>Certifications</h2><p>No certifications have been added to this portfolio yet.</p></div>`,
  education: `<div class="preview"><div class="eyebrow">// education.md</div><h2>Education</h2><p><b class="strong">Alliance University</b> - B.Tech Computer Science</p><p>Expected 2028 - CGPA 9.5/10</p></div>`,
  contact: `<div class="preview"><div class="eyebrow">// contact.ts</div><h2>Contact</h2><div class="contact-grid"><a class="contact-card" href="mailto:varashree710@gmail.com"><span class="icon">&#9993;</span><div><span class="label">Email</span><span class="value">varashree710@gmail.com</span></div></a><a class="contact-card" href="https://linkedin.com/in/varashree01" target="_blank" rel="noopener"><span class="icon">in</span><div><span class="label">LinkedIn</span><span class="value">linkedin.com/in/varashree01</span></div></a><a class="contact-card" href="https://github.com/Varashree01" target="_blank" rel="noopener"><span class="icon">&#9670;</span><div><span class="label">GitHub</span><span class="value">github.com/Varashree01</span></div></a></div></div>`,
  readme: `<div class="preview"><div class="eyebrow"># README.md</div><h2>Portfolio Workspace</h2><p>This is a personal developer workspace for Varashree H A, built with semantic HTML, CSS, and vanilla JavaScript.</p><div class="section"><h2>Try it</h2><div class="interest-grid"><div class="interest-card"><span class="tag">CTRL P</span><h3>Quick Open</h3><p>Find any portfolio file instantly.</p></div><div class="interest-card"><span class="tag">CTRL SHIFT C</span><h3>Varashree AI</h3><p>Ask questions answered from portfolio context.</p></div><div class="interest-card"><span class="tag">TERMINAL</span><h3>Commands</h3><p>Use help, open, resume, and navigation commands.</p></div></div></div></div>`
};

const source = {
  'home.tsx': ['// hello world - welcome to my portfolio', 'const profile = {', '  name: "Varashree H A",', '  role: "AI Engineer",', '  focus: ["Multi-Agent Systems", "Healthcare AI", "Digital Twins"],', '  location: "Bangalore, India"', '};'],
  'about.html': ['<!-- about.html -->', '<main class="about">', '  <h1>About Me</h1>', '  <p>Computer Science undergraduate focused on AI.</p>', '</main>'],
  'projects/agent-framework.md': ['# Multi-Agent AI Orchestration Framework', '', 'A collaborative multi-agent AI framework.', '', '- LangChain and LangGraph', '- Supervisor-worker orchestration', '- Flask API and React surface'],
  'projects/medtwin.md': ['# MedTwin AI', '', 'A healthcare digital twin concept.', '', 'Focus: patient-centric intelligence and grounded insight.'],
  'projects/product-store.md': ['# Product Store', '', 'A MERN application with product, cart, and user flows.'],
  'skills.json': ['{', '  "languages": ["Python", "JavaScript", "C++"],', '  "ai_ml": ["LangChain", "LangGraph", "RAG"],', '  "backend": ["Flask", "Node.js", "MongoDB"],', '  "frontend": ["React"]', '}'],
  'experience.ts': ['interface Experience {', '  role: "AI Engineering Intern";', '  period: "Nov 2025 to Jan 2026";', '  stack: ["LangChain", "Flask", "React"];', '}'],
  'research.md': ['# Research Interests', '', '1. Multi-Agent Systems', '2. Healthcare AI', '3. Digital Twins', '4. Distributed AI', '5. Explainable AI'],
  'certifications.md': ['# Certifications', '', 'No certifications have been added yet.'],
  'education.md': ['# Education', '', 'Alliance University', 'B.Tech Computer Science', 'Expected 2028 - CGPA 9.5/10'],
  'contact.ts': ['const contact = {', '  email: "varashree710@gmail.com",', '  github: "github.com/Varashree01",', '  linkedin: "linkedin.com/in/varashree01"', '};'],
  'README.md': ['# Portfolio Workspace', '', 'A personal developer workspace built with HTML, CSS, and vanilla JavaScript.'],
  'resume.pdf': ['Resume action', '', 'Use the Resume action to print or save a PDF from the browser.']
};

let openTabs = ['home.tsx'];
let activeFile = 'home.tsx';
let activeLine = 0;
let paletteMode = 'quick';
let paletteIndex = 0;
let history = [];
let historyIndex = -1;
let typingTimer;

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fileBadge = (key) => files[key].badge;

function renderTree() {
  const renderNode = (node) => {
    if (node.type === 'folder') return `<div class="tree-folder" data-folder="${node.label}"><div class="folder-row"><span class="chevron down">&#8250;</span><span>&#128193;</span><span>${node.label}</span></div><div class="folder-children">${node.children.map(renderNode).join('')}</div></div>`;
    return `<button class="tree-file ${node.key === activeFile ? 'active' : ''}" data-file="${node.key}"><span class="file-badge ${node.key.split('.').pop()}">${fileBadge(node.key)}</span><span>${files[node.key].label}</span></button>`;
  };
  $('#tree').innerHTML = folderTree.map(renderNode).join('');
  $('#tree').querySelectorAll('[data-file]').forEach((el) => el.addEventListener('click', () => openFile(el.dataset.file)));
  $('#tree').querySelectorAll('[data-folder]').forEach((el) => el.querySelector('.folder-row').addEventListener('click', () => el.classList.toggle('closed')));
}

function renderTabs() {
  $('#tabs').innerHTML = openTabs.map((key) => `<div class="tab ${key === activeFile ? 'active' : ''}" data-tab="${key}" role="tab" aria-selected="${key === activeFile}"><span class="file-badge ${key.split('.').pop()}">${fileBadge(key)}</span><span>${files[key].label}</span><button class="tab-close" data-close="${key}" aria-label="Close ${files[key].label}">&#215;</button></div>`).join('');
  $('#tabs').querySelectorAll('[data-tab]').forEach((el) => el.addEventListener('click', (event) => { if (!event.target.closest('[data-close]')) openFile(el.dataset.tab); }));
  $('#tabs').querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', (event) => { event.stopPropagation(); closeTab(el.dataset.close); }));
}

function renderBreadcrumb() {
  const parts = ['varashree-ha', ...files[activeFile].path];
  $('#breadcrumbs').innerHTML = parts.map((part, index) => `<span class="${index === parts.length - 1 ? 'current' : ''}">${part}</span>${index === parts.length - 1 ? '' : '<span class="slash">/</span>'}`).join('');
}

function highlightLine(value) {
  let text = escapeHtml(value);
  text = text.replace(/(\/\/.*|# .*)$/g, '<span class="token-comment">$1</span>');
  text = text.replace(/(&quot;.*?&quot;|".*?"|'[^']*')/g, '<span class="token-string">$1</span>');
  text = text.replace(/\b(const|interface|extends|class|function|return|const)\b/g, '<span class="token-key">$1</span>');
  text = text.replace(/(&lt;\/?[a-z]+|[a-z-]+&gt;)/gi, '<span class="token-tag">$1</span>');
  return text || '&nbsp;';
}

function renderSource(key) {
  const lines = source[key] || source['README.md'];
  return `<div class="editor-source" data-file-source="${key}">${lines.map((line, index) => `<div class="source-line ${index === activeLine ? 'active-line' : ''}" data-line="${index}" title="Line ${index + 1}"><span class="line-number">${String(index + 1).padStart(2, ' ')}</span><span class="line-code">${highlightLine(line)}${index === activeLine ? '<span class="caret"></span>' : ''}</span></div>`).join('')}<div class="editor-tooltip" hidden></div></div>`;
}

function renderPreview(key) {
  const content = preview[files[key].title] || preview.readme;
  return content;
}

function bindEditor() {
  $('#editor').querySelectorAll('.source-line').forEach((line) => line.addEventListener('click', () => { activeLine = Number(line.dataset.line); renderEditor(); }));
  const sourceEl = $('#editor').querySelector('.editor-source');
  if (!sourceEl) return;
  const tooltip = sourceEl.querySelector('.editor-tooltip');
  sourceEl.querySelectorAll('.line-code').forEach((line) => line.addEventListener('mouseenter', (event) => { tooltip.innerHTML = `<strong>Editor insight</strong><br>Line ${event.currentTarget.parentElement.dataset.line}: portfolio source`; tooltip.hidden = false; tooltip.style.left = `${event.offsetX + 25}px`; tooltip.style.top = `${event.offsetY + 10}px`; }));
  sourceEl.addEventListener('mouseleave', () => { tooltip.hidden = true; });
}

function bindPreview() {
  $('#editor').querySelectorAll('[data-open]').forEach((el) => el.addEventListener('click', () => openFile(el.dataset.open)));
  $('#editor').querySelectorAll('[data-resume]').forEach((el) => el.addEventListener('click', (event) => { event.preventDefault(); openResume(); }));
  startTyping($('#typing'));
}

function renderEditor() {
  const current = files[activeFile];
  $('#editor').innerHTML = current.kind === 'resume' ? renderSource(activeFile) : (current.kind === 'preview' ? renderPreview(activeFile) : renderSource(activeFile));
  if (current.kind === 'preview') bindPreview(); else bindEditor();
  $('#statusFile').textContent = current.label;
  $('#statusLang').textContent = current.lang;
}

function renderAll() { renderTree(); renderTabs(); renderBreadcrumb(); renderEditor(); }
function openFile(key) { if (!files[key]) return; if (!openTabs.includes(key)) openTabs.push(key); activeFile = key; activeLine = 0; renderAll(); closeExplorerMobile(); }
function closeTab(key) { const index = openTabs.indexOf(key); if (index < 0) return; openTabs.splice(index, 1); if (activeFile === key) activeFile = openTabs[Math.max(0, index - 1)] || 'home.tsx'; if (!openTabs.length) openTabs = ['home.tsx']; renderAll(); }

function startTyping(el) {
  if (!el) return;
  clearTimeout(typingTimer);
  const phrases = ['Turning research into intelligent systems.', 'Building multi-agent systems with purpose.', 'Designing AI products that feel real.'];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = phrases[0]; return; }
  let phraseIndex = 0; let charIndex = 0; let deleting = false;
  const tick = () => { const phrase = phrases[phraseIndex]; el.innerHTML = `${escapeHtml(phrase.slice(0, charIndex))}<span class="caret"></span>`; if (!deleting && charIndex === phrase.length) deleting = true; else if (deleting && charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; } charIndex += deleting ? -1 : 1; typingTimer = setTimeout(tick, deleting ? 32 : 62); };
  tick();
}

function toggleExplorer(force) { const explorer = $('#explorer'); const closed = typeof force === 'boolean' ? !force : explorer.classList.contains('closed'); explorer.classList.toggle('closed', closed); }
function closeExplorerMobile() { if (window.innerWidth <= 900) toggleExplorer(false); }
function toggleTerminal(force) { const panel = $('#terminalPanel'); const open = typeof force === 'boolean' ? force : panel.classList.contains('hidden'); panel.classList.toggle('hidden', !open); if (open) setTimeout(() => $('#terminalInput').focus(), 50); }
function openAssistant() { $('#assistantPanel').classList.add('open'); $('#assistantPanel').setAttribute('aria-hidden', 'false'); setTimeout(() => $('#assistantInput').focus(), 50); }
function closeAssistant() { $('#assistantPanel').classList.remove('open'); $('#assistantPanel').setAttribute('aria-hidden', 'true'); }
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2200); }
function openResume() { showToast('Resume print view opened. Choose Save as PDF.'); const resume = window.open('', '_blank', 'noopener'); if (!resume) { window.print(); return; } resume.document.write('<title>Varashree H A - Resume</title><style>body{font-family:Arial;max-width:760px;margin:48px auto;line-height:1.6;color:#17202a}h1{margin-bottom:0}h2{border-bottom:1px solid #ccd4dc;padding-bottom:5px}small{color:#586574}</style><h1>Varashree H A</h1><small>AI Engineer | Research Enthusiast | Full Stack Developer</small><p>Bangalore, India | varashree710@gmail.com | github.com/Varashree01 | linkedin.com/in/varashree01</p><h2>Education</h2><p>Alliance University - B.Tech Computer Science - Expected 2028 - CGPA 9.5/10</p><h2>Experience</h2><p>AI Engineering Intern - Nov 2025 to Jan 2026</p><p>Built a collaborative multi-agent AI framework using LangChain, supervisor-worker orchestration, external API integrations, Flask, and React.</p><h2>Projects</h2><p>Multi-Agent AI Orchestration Framework; MedTwin AI; Product Store</p><h2>Skills</h2><p>Python, C++, JavaScript, React, Flask, Node.js, MongoDB, LangChain, LangGraph, OpenAI APIs, HuggingFace, RAG</p>'); resume.document.close(); }

const commands = ['help', 'whoami', 'about', 'projects', 'skills', 'experience', 'research', 'contact', 'resume', 'clear', 'open'];
const responses = {
  whoami: '<span class="key">Varashree H A</span><br>AI Engineer - Research Enthusiast - Full Stack Developer<br>Bangalore, India.',
  about: 'Computer Science undergraduate focused on AI, intelligent systems, and full-stack engineering.',
  projects: 'Multi-Agent AI Orchestration Framework; MedTwin AI; Product Store.<br><span class="warn">Try: open projects/agent-framework.md</span>',
  skills: 'Python, C++, JavaScript, React, Flask, Node.js, MongoDB, LangChain, LangGraph, OpenAI APIs, HuggingFace, RAG.',
  experience: 'AI Engineering Intern - Nov 2025 to Jan 2026. LangChain, Flask, React, and supervisor-worker orchestration.',
  research: 'Multi-Agent Systems; Healthcare AI; Digital Twins; Distributed AI; Explainable AI.',
  contact: 'Email: varashree710@gmail.com<br>GitHub: github.com/Varashree01<br>LinkedIn: linkedin.com/in/varashree01',
  education: 'Alliance University - B.Tech Computer Science - Expected 2028 - CGPA 9.5/10',
  help: 'Commands: help, whoami, about, projects, skills, experience, research, contact, resume, clear, open &lt;file&gt;.'
};

function addTerminalLine(command, output) { const line = document.createElement('div'); line.className = 'term-line'; line.innerHTML = `<span class="terminal-prompt">varashree@portfolio:~$</span> <span class="terminal-command">${escapeHtml(command)}</span>`; $('#panelBody').appendChild(line); if (output !== null) { const result = document.createElement('div'); result.className = 'terminal-output'; result.innerHTML = output; $('#panelBody').appendChild(result); } $('#panelBody').scrollTop = $('#panelBody').scrollHeight; }
function runCommand(raw) { const value = raw.trim(); if (!value) return; const lower = value.toLowerCase(); if (lower === 'clear') { $('#panelBody').innerHTML = ''; return; } if (lower === 'resume') { addTerminalLine(value, '<span class="good">Opening resume print view...</span>'); openResume(); return; } if (lower.startsWith('open ')) { const target = value.slice(5).trim().toLowerCase(); const match = Object.keys(files).find((key) => key.toLowerCase() === target || files[key].label.toLowerCase() === target); if (match) { addTerminalLine(value, `<span class="good">Opening ${files[match].label}</span>`); openFile(match); } else addTerminalLine(value, `<span class="bad">File not found: ${escapeHtml(target)}</span>`); return; } if (responses[lower]) { addTerminalLine(value, responses[lower]); if (['about', 'projects', 'skills', 'experience', 'research', 'contact'].includes(lower)) openFile(lower === 'projects' ? 'projects/agent-framework.md' : `${lower}${lower === 'contact' ? '.ts' : lower === 'about' ? '.html' : lower === 'skills' ? '.json' : lower === 'experience' ? '.ts' : '.md'}`); return; } addTerminalLine(value, '<span class="bad">Command not found.</span> Type <span class="key">help</span>.'); }

function terminalSetup() { $('#panelBody').innerHTML = '<div class="term-line"><span class="terminal-prompt">varashree@portfolio:~$</span> welcome</div><div class="terminal-output">Portfolio ready. Type <span class="key">help</span> to see commands.</div>'; const form = $('#terminalForm'); const input = $('#terminalInput'); if (form.dataset.bound) return; form.dataset.bound = 'true'; form.addEventListener('submit', (event) => { event.preventDefault(); const value = input.value.trim(); if (!value) return; history.push(value); historyIndex = history.length; runCommand(value); input.value = ''; }); input.addEventListener('keydown', (event) => { if (event.key === 'ArrowUp') { historyIndex = Math.max(0, historyIndex - 1); input.value = history[historyIndex] || ''; event.preventDefault(); } if (event.key === 'ArrowDown') { historyIndex = Math.min(history.length, historyIndex + 1); input.value = history[historyIndex] || ''; event.preventDefault(); } if (event.key === 'Tab') { const match = commands.find((command) => command.startsWith(input.value.toLowerCase())); if (match) { input.value = match; event.preventDefault(); } } }); }

const workspaceCommands = [
  { label: 'Quick Open', shortcut: 'Ctrl P', action: () => openPalette('quick') },
  { label: 'Toggle Explorer', shortcut: 'Ctrl B', action: () => toggleExplorer() },
  { label: 'Toggle Terminal', shortcut: 'Ctrl J', action: () => toggleTerminal() },
  { label: 'Open Varashree AI', shortcut: 'Ctrl Shift C', action: openAssistant },
  { label: 'Open Resume', shortcut: '', action: openResume },
  { label: 'Open Contact', shortcut: '', action: () => openFile('contact.ts') },
  { label: 'Open Selected Project', shortcut: '', action: () => openFile('projects/agent-framework.md') }
];
function paletteItems() { const query = $('#paletteInput').value.toLowerCase(); const commandItems = workspaceCommands.filter((item) => item.label.toLowerCase().includes(query)).map((item) => ({ ...item, type: 'command' })); if (paletteMode === 'command') return commandItems; return Object.keys(files).filter((key) => key.toLowerCase().includes(query) || files[key].label.toLowerCase().includes(query)).map((key) => ({ label: files[key].label, path: '/' + files[key].path.join('/'), key, type: 'file' })); }
function renderPalette() { const items = paletteItems(); paletteIndex = Math.min(paletteIndex, Math.max(0, items.length - 1)); $('#paletteList').innerHTML = items.length ? items.map((item, index) => `<div class="palette-item ${index === paletteIndex ? 'active' : ''}" data-index="${index}"><span class="file-badge">${item.type === 'file' ? files[item.key].badge : 'CMD'}</span><span>${item.label}</span><span class="path">${item.path || 'command'}</span></div>`).join('') : '<div class="palette-item">No matches</div>'; $('#paletteList').querySelectorAll('[data-index]').forEach((el) => el.addEventListener('click', () => selectPaletteItem(items[Number(el.dataset.index)]))); }
function openPalette(mode = 'quick') { paletteMode = mode; $('#paletteTitle').textContent = mode === 'command' ? 'Command Palette' : 'Quick Open'; $('#paletteInput').placeholder = mode === 'command' ? 'Search commands...' : 'Search files...'; $('#paletteOverlay').classList.remove('hidden'); $('#paletteInput').value = ''; paletteIndex = 0; renderPalette(); setTimeout(() => $('#paletteInput').focus(), 40); }
function closePalette() { $('#paletteOverlay').classList.add('hidden'); }
function selectPaletteItem(item) { if (!item) return; if (item.type === 'file') openFile(item.key); else item.action(); closePalette(); }

const menus = {
  file: [{ label: 'Quick Open', shortcut: 'Ctrl P', action: () => openPalette('quick') }, { label: 'Open Resume', shortcut: '', action: openResume }],
  edit: [{ label: 'Copy email address', shortcut: '', action: () => { navigator.clipboard?.writeText('varashree710@gmail.com'); showToast('Email copied to clipboard'); } }],
  view: [{ label: 'Toggle Explorer', shortcut: 'Ctrl B', action: () => toggleExplorer() }, { label: 'Toggle Terminal', shortcut: 'Ctrl J', action: () => toggleTerminal() }],
  run: [{ label: 'Open selected project', shortcut: '', action: () => openFile('projects/agent-framework.md') }],
  terminal: [{ label: 'New terminal session', shortcut: '', action: terminalSetup }, { label: 'Clear terminal', shortcut: '', action: () => { $('#panelBody').innerHTML = ''; } }],
  help: [{ label: 'Ask Varashree AI', shortcut: 'Ctrl Shift C', action: openAssistant }, { label: 'Open contact', shortcut: '', action: () => openFile('contact.ts') }]
};
function closeMenu() { $('#menuPopover').classList.add('hidden'); document.querySelectorAll('[data-menu]').forEach((button) => button.setAttribute('aria-expanded', 'false')); }
function openMenu(button) { const items = menus[button.dataset.menu]; const popover = $('#menuPopover'); const rect = button.getBoundingClientRect(); popover.innerHTML = items.map((item, index) => `<button class="menu-item" role="menuitem" data-menu-item="${index}"><span>${item.label}</span><kbd>${item.shortcut}</kbd></button>`).join(''); popover.style.left = `${rect.left}px`; popover.style.top = `${rect.bottom + 4}px`; popover.classList.remove('hidden'); document.querySelectorAll('[data-menu]').forEach((other) => other.setAttribute('aria-expanded', String(other === button))); popover.querySelectorAll('[data-menu-item]').forEach((item) => item.addEventListener('click', () => { items[Number(item.dataset.menuItem)].action(); closeMenu(); })); }
document.querySelectorAll('[data-menu]').forEach((el) => el.addEventListener('click', () => $('#menuPopover').classList.contains('hidden') ? openMenu(el) : closeMenu()));
document.addEventListener('click', (event) => { if (!event.target.closest('[data-menu]') && !event.target.closest('#menuPopover')) closeMenu(); });
document.querySelectorAll('[data-activity]').forEach((el) => el.addEventListener('click', () => { const action = el.dataset.activity; if (action === 'explorer') toggleExplorer(); if (action === 'search') openPalette(); if (action === 'assistant') openAssistant(); if (action === 'contact') openFile('contact.ts'); document.querySelectorAll('.activity-icon').forEach((item) => item.classList.toggle('active', item === el)); }));
$('#mobileExplorer').addEventListener('click', () => toggleExplorer()); $('#closeExplorer').addEventListener('click', () => toggleExplorer(false)); $('#quickOpenButton').addEventListener('click', () => openPalette()); $('#assistantButton').addEventListener('click', openAssistant); $('#closeAssistant').addEventListener('click', closeAssistant); $('#closeTerminal').addEventListener('click', () => toggleTerminal(false));
document.querySelectorAll('[data-panel-action]').forEach((el) => el.addEventListener('click', () => { const panel = $('#terminalPanel'); if (el.dataset.panelAction === 'minimize') panel.classList.toggle('minimized'); if (el.dataset.panelAction === 'expand') panel.classList.toggle('expanded'); }));
document.querySelectorAll('[data-panel]').forEach((el) => el.addEventListener('click', () => { document.querySelectorAll('[data-panel]').forEach((tab) => tab.classList.toggle('active', tab === el)); if (el.dataset.panel === 'output') $('#panelBody').innerHTML = '<div class="terminal-output"><span class="good">[build] Workspace ready. 0 errors, 0 warnings.</span></div>'; else if (el.dataset.panel === 'problems') $('#panelBody').innerHTML = '<div class="terminal-output"><span class="good">No problems have been detected.</span></div>'; else terminalSetup(); }));
$('#paletteInput').addEventListener('input', () => { paletteIndex = 0; renderPalette(); }); $('#paletteInput').addEventListener('keydown', (event) => { const items = paletteItems(); if (event.key === 'ArrowDown') { paletteIndex = Math.min(paletteIndex + 1, items.length - 1); renderPalette(); event.preventDefault(); } if (event.key === 'ArrowUp') { paletteIndex = Math.max(0, paletteIndex - 1); renderPalette(); event.preventDefault(); } if (event.key === 'Enter') selectPaletteItem(items[paletteIndex]); if (event.key === 'Escape') closePalette(); }); $('#paletteOverlay').addEventListener('click', (event) => { if (event.target.id === 'paletteOverlay') closePalette(); });
$('#assistantForm').addEventListener('submit', (event) => { event.preventDefault(); const input = $('#assistantInput'); const question = input.value.trim(); if (!question) return; const lower = question.toLowerCase(); const answer = lower.includes('project') ? 'Varashree has three projects: a Multi-Agent AI Orchestration Framework, MedTwin AI, and Product Store.' : lower.includes('skill') ? 'Her listed skills include Python, C++, JavaScript, React, Flask, Node.js, MongoDB, LangChain, LangGraph, OpenAI APIs, HuggingFace, and RAG.' : lower.includes('research') ? 'Her research interests are Multi-Agent Systems, Healthcare AI, Digital Twins, Distributed AI, and Explainable AI.' : lower.includes('experience') ? 'She worked as an AI Engineering Intern from Nov 2025 to Jan 2026.' : lower.includes('education') ? 'She studies B.Tech Computer Science at Alliance University, expected 2028, with a CGPA of 9.5/10.' : lower.includes('contact') || lower.includes('email') ? 'You can reach Varashree at varashree710@gmail.com or linkedin.com/in/varashree01.' : 'I can answer questions about the portfolio: projects, skills, research, experience, education, and contact.'; $('#assistantMessages').insertAdjacentHTML('beforeend', `<div class="assistant-message user">${escapeHtml(question)}</div><div class="assistant-message bot">${answer}</div>`); input.value = ''; $('#assistantMessages').scrollTop = $('#assistantMessages').scrollHeight; });
window.addEventListener('keydown', (event) => { const modifier = event.ctrlKey || event.metaKey; if (modifier && event.key.toLowerCase() === 'p') { event.preventDefault(); openPalette('quick'); } if (modifier && event.key.toLowerCase() === 'k') { event.preventDefault(); openPalette('command'); } if (modifier && event.key.toLowerCase() === 'b') { event.preventDefault(); toggleExplorer(); } if (modifier && event.shiftKey && event.key.toLowerCase() === 'c') { event.preventDefault(); openAssistant(); } if (modifier && event.key.toLowerCase() === 'j') { event.preventDefault(); toggleTerminal(); } if (event.key === 'Escape') { closePalette(); closeAssistant(); closeMenu(); } });
function updateClock() { const now = new Date(); $('#statusClock').textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now) + ' IST'; }
terminalSetup(); renderAll(); updateClock(); setInterval(updateClock, 1000);
