const files = {
  'home.tsx': {
    label: 'home.tsx',
    lang: 'TypeScript React',
    badge: 'TSX',
    path: ['home.tsx'],
    html: `
      <div class="content">
        <div class="eyebrow">// hello world — welcome to my portfolio</div>
        <h1 class="h1">Varashree<br><span>H A</span></h1>
        <div class="role-row">
          <span class="pill"><span class="dot-mini" style="background: var(--purple);"></span>AI Engineer</span>
          <span class="pill"><span class="dot-mini" style="background: var(--cyan);"></span>Research Enthusiast</span>
          <span class="pill"><span class="dot-mini" style="background: var(--amber);"></span>Full Stack Developer</span>
        </div>
        <div class="meta">
          <span>📍 Bangalore, India</span>
          <span>✉️ varashree710@gmail.com</span>
          <span>🔗 linkedin.com/in/varashree01</span>
        </div>
        <div id="typing">Turning research into intelligent systems.</div>
        <p>I am a Computer Science undergraduate focused on <span class="strong">Artificial Intelligence</span>, <span class="strong">intelligent systems</span>, and <span class="strong">full-stack engineering</span>. My interests sit across <span class="strong">Multi-Agent Systems</span>, <span class="strong">Healthcare AI</span>, <span class="strong">Digital Twins</span>, and <span class="strong">distributed AI</span>.</p>
        <div class="cta">
          <button class="capsule primary" data-open="projects.js">Projects</button>
          <button class="capsule" data-open="about.html">About</button>
          <button class="capsule" data-open="contact.css">Contact</button>
        </div>
        <div class="stats">
          <div class="stat"><strong>9.5</strong><span>CGPA</span></div>
          <div class="stat"><strong>3</strong><span>Projects</span></div>
          <div class="stat"><strong>5</strong><span>Research Areas</span></div>
          <div class="stat"><strong>∞</strong><span>Curiosity</span></div>
        </div>
        <div class="section">
          <h2>Quick access</h2>
          <div class="quick-grid">
            <div class="quick-card" data-open="about.html"><span class="tag">HTML</span><h3>About</h3><p>Bio, focus, and learning direction.</p></div>
            <div class="quick-card" data-open="projects.js"><span class="tag">JS</span><h3>Projects</h3><p>Selected AI and full-stack builds.</p></div>
            <div class="quick-card" data-open="research.md"><span class="tag">MD</span><h3>Research</h3><p>Core questions and interests.</p></div>
            <div class="quick-card" data-open="experience.ts"><span class="tag">TS</span><h3>Experience</h3><p>AI Engineering Intern profile.</p></div>
          </div>
        </div>
      </div>
    `
  },
  'about.html': {
    label: 'about.html',
    lang: 'HTML',
    badge: 'HTML',
    path: ['about.html'],
    html: `
      <div class="content">
        <div class="eyebrow">&lt;!-- about.html --&gt;</div>
        <h2>About Me</h2>
        <p>Hi, I’m <span class="strong">Varashree H A</span>, a Computer Science undergraduate focused on <span class="strong">Artificial Intelligence</span>, <span class="strong">intelligent systems</span>, and <span class="strong">full-stack engineering</span>.</p>
        <p>I am especially interested in <span class="strong">Multi-Agent Systems</span>, <span class="strong">Healthcare AI</span>, <span class="strong">Digital Twins</span>, and <span class="strong">Distributed AI</span>. I enjoy turning research ideas into working systems with thoughtful architecture and user experience.</p>
        <div class="section">
          <h2>Current focus</h2>
          <div class="interest-list">
            <div class="interest"><span class="tag">AI</span><h3>Multi-agent workflows</h3><p>Supervisor-worker orchestration, reasoning loops, and team-based agent designs.</p></div>
            <div class="interest"><span class="tag">HEALTH</span><h3>Healthcare AI</h3><p>Translating AI capabilities into clinically relevant, grounded systems.</p></div>
            <div class="interest"><span class="tag">SYSTEMS</span><h3>Distributed AI</h3><p>Building scalable patterns that connect intelligence, APIs, and products.</p></div>
            <div class="interest"><span class="tag">RESEARCH</span><h3>Explainable AI</h3><p>Making the reasoning behind intelligent systems more transparent and useful.</p></div>
          </div>
        </div>
      </div>
    `
  },
  'projects.js': {
    label: 'projects.js',
    lang: 'JavaScript',
    badge: 'JS',
    path: ['projects.js'],
    html: `
      <div class="content">
        <div class="eyebrow">const projects = [ ...featuredWork ]</div>
        <h2>Projects</h2>
        <div class="project-grid">
          <div class="project"><span class="tag">AI</span><h3>Multi-Agent AI Orchestration Framework</h3><p>Built a collaborative multi-agent AI framework using LangChain, supervisor-worker orchestration, external API integration, Flask, and React.</p></div>
          <div class="project"><span class="tag">HEALTH</span><h3>MedTwin AI</h3><p>Healthcare digital twin concept focused on patient-centric intelligence and grounded AI-driven insight generation.</p></div>
          <div class="project"><span class="tag">FULL STACK</span><h3>Product Store</h3><p>MERN application with product, cart, and user flows built end-to-end for real business workflows.</p></div>
        </div>
      </div>
    `
  },
  'skills.json': {
    label: 'skills.json',
    lang: 'JSON',
    badge: 'JSON',
    path: ['skills.json'],
    html: `
      <div class="content">
        <div class="eyebrow">{ "status": "always_learning" }</div>
        <h2>Skills</h2>
        <div class="skills">
          <div class="skill"><div class="skill-head"><span>Python</span><span>90%</span></div><div class="bar"><span style="width:90%"></span></div></div>
          <div class="skill"><div class="skill-head"><span>JavaScript</span><span>82%</span></div><div class="bar"><span style="width:82%"></span></div></div>
          <div class="skill"><div class="skill-head"><span>C++</span><span>70%</span></div><div class="bar"><span style="width:70%"></span></div></div>
          <div class="skill"><div class="skill-head"><span>React</span><span>80%</span></div><div class="bar"><span style="width:80%"></span></div></div>
          <div class="skill"><div class="skill-head"><span>Flask</span><span>82%</span></div><div class="bar"><span style="width:82%"></span></div></div>
          <div class="skill"><div class="skill-head"><span>Node.js</span><span>76%</span></div><div class="bar"><span style="width:76%"></span></div></div>
          <div class="skill"><div class="skill-head"><span>MongoDB</span><span>74%</span></div><div class="bar"><span style="width:74%"></span></div></div>
          <div class="skill"><div class="skill-head"><span>LangChain</span><span>86%</span></div><div class="bar"><span style="width:86%"></span></div></div>
        </div>
      </div>
    `
  },
  'experience.ts': {
    label: 'experience.ts',
    lang: 'TypeScript',
    badge: 'TS',
    path: ['experience.ts'],
    html: `
      <div class="content">
        <div class="eyebrow">interface Experience { role: 'AI Engineering Intern' }</div>
        <h2>Experience</h2>
        <p><span class="strong">AI Engineering Intern</span> — <span class="strong">Nov 2025 to Jan 2026</span></p>
        <p>Built a collaborative multi-agent AI framework using LangChain, supervisor-worker orchestration, external API integrations, Flask, and React.</p>
        <div class="section">
          <h2>Stack</h2>
          <div class="role-row">
            <span class="pill">LangChain</span>
            <span class="pill">LangGraph</span>
            <span class="pill">Flask</span>
            <span class="pill">React</span>
            <span class="pill">REST APIs</span>
          </div>
        </div>
      </div>
    `
  },
  'research.md': {
    label: 'research.md',
    lang: 'Markdown',
    badge: 'MD',
    path: ['research.md'],
    html: `
      <div class="content">
        <div class="eyebrow"># research-interests</div>
        <h2>Research Interests</h2>
        <div class="interest-list">
          <div class="interest"><span class="tag">R.01</span><h3>Multi-Agent Systems</h3><p>Designing coordinated agent-based architectures for real tasks.</p></div>
          <div class="interest"><span class="tag">R.02</span><h3>Healthcare AI</h3><p>Applying AI to diagnoses, monitoring, and decision support with grounded reasoning.</p></div>
          <div class="interest"><span class="tag">R.03</span><h3>Digital Twins</h3><p>Creating living models of systems that evolve with real-world data.</p></div>
          <div class="interest"><span class="tag">R.04</span><h3>Distributed AI</h3><p>Scaling intelligence across systems and services with robust coordination.</p></div>
          <div class="interest"><span class="tag">R.05</span><h3>Explainable AI</h3><p>Making decision-making understandable and accountable for eventual users.</p></div>
        </div>
      </div>
    `
  },
  'education.md': {
    label: 'education.md',
    lang: 'Markdown',
    badge: 'MD',
    path: ['education.md'],
    html: `
      <div class="content">
        <div class="eyebrow">// academic background</div>
        <h2>Education</h2>
        <p><span class="strong">Alliance University</span> — B.Tech Computer Science</p>
        <p>Expected 2028 • CGPA 9.5/10</p>
      </div>
    `
  },
  'contact.css': {
    label: 'contact.css',
    lang: 'CSS',
    badge: 'CSS',
    path: ['contact.css'],
    html: `
      <div class="content">
        <div class="eyebrow">/* open to research, engineering & conversations */</div>
        <h2>Contact</h2>
        <div class="contact-list">
          <a class="contact-card" href="mailto:varashree710@gmail.com"><span class="icon">✉</span><div><span class="label">Email</span><span class="value">varashree710@gmail.com</span></div></a>
          <a class="contact-card" href="https://linkedin.com/in/varashree01" target="_blank" rel="noreferrer"><span class="icon">in</span><div><span class="label">LinkedIn</span><span class="value">linkedin.com/in/varashree01</span></div></a>
        </div>
      </div>
    `
  },
  'README.md': {
    label: 'README.md',
    lang: 'Markdown',
    badge: 'MD',
    path: ['README.md'],
    html: `
      <div class="content">
        <div class="eyebrow"># README.md</div>
        <h2>Portfolio Workspace</h2>
        <p>This portfolio is a lightweight IDE-inspired personal site for Varashree H A, built with semantic HTML, CSS, and vanilla JavaScript.</p>
        <div class="section">
          <h2>Features</h2>
          <div class="interest-list">
            <div class="interest"><span class="tag">UI</span><h3>VS Code aesthetic</h3><p>Dark workspace layout with explorer, tabs, and status bar.</p></div>
            <div class="interest"><span class="tag">UX</span><h3>Command palette</h3><p>Keyboard navigation and instant file discovery.</p></div>
            <div class="interest"><span class="tag">INT</span><h3>Terminal interactions</h3><p>Command-based navigation for skills, projects, and research.</p></div>
          </div>
        </div>
      </div>
    `
  }
};

const rootFiles = Object.keys(files);
let openTabs = ['home.tsx'];
let activeFile = 'home.tsx';
let paletteActive = 0;

function extBadge(key) {
  const map = { 'tsx': 'TSX', ts: 'TS', js: 'JS', html: 'HTML', css: 'CSS', md: 'MD', json: 'JSON' };
  return map[key.split('.').pop()] || 'FILE';
}

function renderTree() {
  const tree = document.getElementById('tree');
  tree.innerHTML = rootFiles.map((key) => `
    <li class="tree-item ${key === activeFile ? 'active' : ''}" data-file="${key}">
      <span class="file-icon">${extBadge(key)}</span>
      <span>${files[key].label}</span>
    </li>
  `).join('');

  tree.querySelectorAll('.tree-item').forEach((item) => {
    item.addEventListener('click', () => openFile(item.dataset.file));
  });
}

function renderTabs() {
  const tabs = document.getElementById('tabs');
  tabs.innerHTML = openTabs.map((key) => `
    <div class="tab ${key === activeFile ? 'active' : ''}" data-tab="${key}">
      <span>${files[key].label}</span>
      <span class="close" data-close="${key}">×</span>
    </div>
  `).join('');

  tabs.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', (event) => {
      if (event.target.dataset.close !== undefined) return;
      openFile(tab.dataset.tab);
    });
  });

  tabs.querySelectorAll('[data-close]').forEach((closeBtn) => {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeTab(closeBtn.dataset.close);
    });
  });
}

function renderCrumbs() {
  const crumbs = document.getElementById('crumbs');
  const path = files[activeFile].path;
  crumbs.innerHTML = ['varashree-ha', ...path].map((part, index, arr) => {
    const last = index === arr.length - 1;
    return `<span class="${last ? 'current' : ''}">${part}</span>${last ? '' : '<span class="slash">/</span>'}`;
  }).join('');
}

function renderEditor() {
  const editor = document.getElementById('editor');
  editor.innerHTML = files[activeFile].html;
  document.getElementById('statusFile').textContent = files[activeFile].label;
  document.getElementById('statusLang').textContent = files[activeFile].lang;

  editor.querySelectorAll('[data-open]').forEach((el) => {
    el.addEventListener('click', () => openFile(el.dataset.open));
  });

  const typing = document.getElementById('typing');
  if (typing) startTyping(typing);
}

function openFile(key) {
  if (!files[key]) return;
  if (!openTabs.includes(key)) openTabs.push(key);
  activeFile = key;
  renderTree();
  renderTabs();
  renderCrumbs();
  renderEditor();
}

function closeTab(key) {
  const idx = openTabs.indexOf(key);
  if (idx === -1) return;
  openTabs.splice(idx, 1);
  if (activeFile === key) activeFile = openTabs[Math.max(0, idx - 1)] || 'home.tsx';
  if (!openTabs.length) openTabs = ['home.tsx'];
  renderTree();
  renderTabs();
  renderCrumbs();
  renderEditor();
}

function typeLoop(element, phrases) {
  let i = 0;
  let j = 0;
  let deleting = false;
  const tick = () => {
    const phrase = phrases[i];
    const text = phrase.substring(0, j + (deleting ? -1 : 1));
    element.textContent = text + '▌';
    if (!deleting && j >= phrase.length) {
      deleting = true;
      setTimeout(tick, 800);
      return;
    }
    if (deleting && j <= 0) {
      deleting = false;
      i = (i + 1) % phrases.length;
    }
    j = deleting ? j - 1 : j + 1;
    setTimeout(tick, deleting ? 35 : 80);
  };
  tick();
}

function startTyping(el) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { el.textContent = 'Turning research into intelligent systems.'; return; }
  typeLoop(el, [
    'Turning research into intelligent systems.',
    'Building multi-agent systems with purpose.',
    'Designing AI products that feel real.'
  ]);
}

function buildPaletteList(query) {
  const q = (query || '').toLowerCase();
  const fileMatches = rootFiles.filter((key) => key.toLowerCase().includes(q) || files[key].label.toLowerCase().includes(q));
  const commands = [
    { label: 'Toggle Terminal', action: () => togglePanel(), key: '⌘J' },
    { label: 'Open Contact', action: () => openFile('contact.css'), key: '✦' }
  ].filter((cmd) => cmd.label.toLowerCase().includes(q));
  return [...fileMatches.map((key) => ({ type: 'file', key, label: files[key].label, path: '/' + files[key].path.join('/') })), ...commands.map((cmd) => ({ type: 'cmd', ...cmd }))];
}

function renderPalette() {
  const list = document.getElementById('paletteList');
  const input = document.getElementById('paletteInput');
  const items = buildPaletteList(input.value);
  if (!items.length) {
    list.innerHTML = '<div class="pal-item"><span class="key">!</span><span>No matches</span></div>';
    return;
  }
  paletteActive = Math.min(paletteActive, items.length - 1);
  list.innerHTML = items.map((item, index) => `
    <div class="pal-item ${index === paletteActive ? 'active' : ''}" data-index="${index}">
      <span class="key">${item.type === 'file' ? extBadge(item.key) : item.key}</span>
      <span>${item.label || item.action ? item.label : item.key}</span>
      <span class="path">${item.path || ''}</span>
    </div>
  `).join('');

  list.querySelectorAll('.pal-item').forEach((el) => {
    el.addEventListener('click', () => selectPaletteItem(items[+el.dataset.index]));
  });
}

function selectPaletteItem(item) {
  if (!item) return;
  if (item.type === 'file') openFile(item.key);
  else if (item.type === 'cmd') item.action();
  closePalette();
}

function openPalette() {
  const palette = document.getElementById('palette');
  const input = document.getElementById('paletteInput');
  palette.classList.remove('hidden');
  input.value = '';
  setTimeout(() => input.focus(), 30);
  renderPalette();
}

function closePalette() {
  document.getElementById('palette').classList.add('hidden');
}

const terminal = document.getElementById('terminal');
const panel = document.getElementById('panel');
const terminalInput = document.getElementById('terminalInput');
let currentPanel = 'terminal';
let commandHistory = [];
let historyIndex = -1;

function applyPanelState(mode = 'default') {
  panel.classList.remove('minimized', 'compact', 'expanded');
  if (mode === 'minimized') panel.classList.add('minimized');
  if (mode === 'compact') panel.classList.add('compact');
  if (mode === 'expanded') panel.classList.add('expanded');
}

function addTerminalLine(command, output) {
  const line = document.createElement('div');
  line.className = 'term-line';
  line.innerHTML = `<span class="prompt">varashree@portfolio:~$</span> <span class="command">${escapeHtml(command)}</span>`;
  terminal.appendChild(line);
  if (output) {
    const out = document.createElement('div');
    out.className = 'term-output';
    out.innerHTML = output;
    terminal.appendChild(out);
  }
  terminal.scrollTop = terminal.scrollHeight;
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const termResponses = {
  whoami: '<span class="strong">Varashree H A</span><br>AI Engineer · Research Enthusiast · Full Stack Developer<br>Bangalore, India',
  about: 'Computer Science undergraduate focused on AI, intelligent systems, and full-stack engineering.<br>Interested in Multi-Agent Systems, Healthcare AI, Digital Twins, and Distributed AI.',
  skills: 'Python, C++, JavaScript, React, Flask, Node.js, Express.js, MongoDB, LangChain, LangGraph, OpenAI APIs, HuggingFace, RAG, REST APIs, Git, GitHub.',
  projects: '1. Multi-Agent AI Orchestration Framework<br>2. MedTwin AI<br>3. Product Store',
  experience: 'AI Engineering Intern — Nov 2025 to Jan 2026<br>Built a collaborative multi-agent AI framework using LangChain, Flask, and React.',
  research: 'Multi-Agent Systems<br>Healthcare AI<br>Digital Twins<br>Distributed AI<br>Explainable AI',
  contact: 'Email: varashree710@gmail.com<br>LinkedIn: linkedin.com/in/varashree01<br>Location: Bangalore, India',
  help: 'Available commands: whoami, about, skills, projects, experience, research, contact, open <file>, clear',
  education: 'Alliance University — B.Tech Computer Science • Expected 2028 • CGPA 9.5/10'
};

function runCommand(raw) {
  const value = raw.trim();
  if (!value) return;
  const lower = value.toLowerCase();
  if (lower === 'clear') { terminal.innerHTML = ''; return; }
  if (lower.startsWith('open ')) {
    const target = value.slice(5).trim();
    const match = rootFiles.find((key) => key.toLowerCase() === target.toLowerCase() || files[key].label.toLowerCase() === target.toLowerCase());
    if (match) {
      addTerminalLine(value, `<span class="ok">Opening ${match}</span>`);
      openFile(match);
      togglePanel(true);
    } else {
      addTerminalLine(value, `<span class="bad">File not found: ${escapeHtml(target)}</span>`);
    }
    return;
  }
  if (termResponses[lower]) {
    addTerminalLine(value, termResponses[lower]);
    return;
  }
  addTerminalLine(value, `<span class="bad">Command not found: ${escapeHtml(value)}</span><br><span class="warn">Try: help</span>`);
}

function togglePanel(force) {
  const open = typeof force === 'boolean' ? force : panel.classList.contains('hidden');
  panel.classList.toggle('hidden', !open);
  if (open) setTimeout(() => terminalInput.focus(), 80);
}

function setPanelTab(name) {
  currentPanel = name;
  document.querySelectorAll('.panel-tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.panel === name));
}

document.querySelectorAll('.panel-tab').forEach((button) => {
  button.addEventListener('click', () => setPanelTab(button.dataset.panel));
});

document.querySelectorAll('.panel-action').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.panelAction;
    if (action === 'minimize') {
      applyPanelState('minimized');
      return;
    }
    if (action === 'compact') {
      applyPanelState('compact');
      return;
    }
    if (action === 'expand') {
      applyPanelState('expanded');
    }
  });
});

document.getElementById('closePanel').addEventListener('click', () => togglePanel(false));

applyPanelState('default');
togglePanel(true);
addTerminalLine('welcome', '<span class="ok">Portfolio ready.</span><br>Type <span class="strong">help</span> to see commands.');

terminalInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const raw = terminalInput.value;
    commandHistory.push(raw);
    historyIndex = commandHistory.length;
    runCommand(raw);
    terminalInput.value = '';
  } else if (event.key === 'ArrowUp') {
    if (historyIndex > 0) {
      historyIndex -= 1;
      terminalInput.value = commandHistory[historyIndex] || '';
    }
  } else if (event.key === 'ArrowDown') {
    if (historyIndex < commandHistory.length) {
      historyIndex += 1;
      terminalInput.value = commandHistory[historyIndex] || '';
    }
  }
});

document.getElementById('searchBtn').addEventListener('click', openPalette);
document.getElementById('paletteInput').addEventListener('input', () => { paletteActive = 0; renderPalette(); });
document.getElementById('paletteInput').addEventListener('keydown', (event) => {
  const items = buildPaletteList(document.getElementById('paletteInput').value);
  if (event.key === 'ArrowDown') {
    paletteActive = Math.min(paletteActive + 1, items.length - 1);
    renderPalette();
  } else if (event.key === 'ArrowUp') {
    paletteActive = Math.max(paletteActive - 1, 0);
    renderPalette();
  } else if (event.key === 'Enter') {
    selectPaletteItem(items[paletteActive]);
  } else if (event.key === 'Escape') {
    closePalette();
  }
});
document.getElementById('palette').addEventListener('click', (event) => {
  if (event.target.id === 'palette') closePalette();
});

function updateClock() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false });
  document.getElementById('statusClock').textContent = formatter.format(now) + ' IST';
}
updateClock();
setInterval(updateClock, 1000);

window.addEventListener('keydown', (event) => {
  const isMac = /Mac|iPhone|iPod|iPad/i.test(navigator.platform || '');
  const mod = isMac ? event.metaKey : event.ctrlKey;
  if (mod && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    const p = document.getElementById('palette');
    if (p.classList.contains('hidden')) openPalette(); else closePalette();
  }
  if (mod && event.key.toLowerCase() === 'j') {
    event.preventDefault();
    togglePanel();
  }
  if (event.key === 'Escape') closePalette();
});

renderTree();
renderTabs();
renderCrumbs();
renderEditor();
