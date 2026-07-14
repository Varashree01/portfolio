
/* ============================================================
   DATA â€” file system
   ============================================================ */
function codeLines(lines){
  return lines.map((l,i) => `<div class="code-line"><span class="ln">${i+1}</span><span class="code">${l}</span></div>`).join('');
}

const FILES = {

  'home.tsx': {
    label:'home.tsx', type:'md', badge:'tsx', lang:'TypeScript React', path:['home.tsx'],
    html:`
      <div class="md">
        <div class="eyebrow">// hello world â€” welcome to my portfolio</div>
        <h1>Varashree<br><span style="color:var(--signal-bright)">H A</span></h1>
        <div class="role-row">
          <span class="role-pill"><span class="dot" style="background:var(--signal-bright)"></span>AI Engineer</span>
          <span class="role-pill"><span class="dot" style="background:var(--teal)"></span>Research Enthusiast</span>
          <span class="role-pill"><span class="dot" style="background:var(--amber)"></span>Full Stack Developer</span>
          <span class="role-pill open"><span class="dot" style="background:var(--signal-bright)"></span>Open to Opportunities</span>
        </div>
        <div class="loc-line">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.4"/></svg>
          Bangalore, India
        </div>

        <div class="typing-line" id="typingLine"></div>

        <p>I live at the crossroads of <b style="color:var(--paper-dim)">AI engineering</b>, <b style="color:var(--paper-dim)">multi-agent systems</b>,
        and <b style="color:var(--paper-dim)">full-stack development</b>. I build software that's genuinely intelligent
        and reliable â€” not just functional.</p>

        <div class="cta-row">
          <span class="btn-solid" data-open="projects.js">ðŸ“ Projects</span>
          <span class="btn-line" data-open="about.html">ðŸ‘¤ About Me</span>
          <span class="btn-line" data-open="contact.css">âœ‰ï¸ Contact</span>
        </div>

        <div class="stats-row">
          <div class="stat-box"><div class="sv" style="color:var(--signal-bright)">9.5</div><div class="sl">CGPA</div></div>
          <div class="stat-box"><div class="sv" style="color:var(--teal)">3</div><div class="sl">Projects</div></div>
          <div class="stat-box"><div class="sv" style="color:var(--amber)">5</div><div class="sl">Research Areas</div></div>
          <div class="stat-box"><div class="sv">âˆž</div><div class="sl">Curiosity</div></div>
        </div>

        <div class="social-row">
          <a class="social-pill" href="https://github.com/varashree" target="_blank" rel="noopener">ðŸ™ GitHub</a>
          <a class="social-pill" href="https://linkedin.com/in/varashree" target="_blank" rel="noopener">ðŸ’¼ LinkedIn</a>
          <a class="social-pill" href="mailto:hello@varashree.dev">âœ‰ï¸ Email</a>
          <a class="social-pill" href="#" target="_blank" rel="noopener">ðŸŽ“ Google Scholar</a>
        </div>

        <div class="section-gap">
          <h3>Quick Access</h3>
          <div class="quick-grid">
            ${quickCard('about.html','About','Bio, background and focus areas','html')}
            ${quickCard('projects.js','Projects','Three shipped, end-to-end case studies','js')}
            ${quickCard('research.md','Research','What I keep coming back to','md')}
            ${quickCard('experience.ts','Experience','AI Engineering Internship','ts')}
            ${quickCard('education.md','Education','Alliance University Â· B.Tech CS','md')}
            ${quickCard('skills.json','Skills','Languages, AI/ML, backend, frontend','json')}
          </div>
        </div>

        <div class="tip">
          <b>Tip â€”</b> press <b>Ctrl / âŒ˜ + K</b> to jump to any file, or open the terminal below
          and try <b>whoami</b>, <b>skills</b>, <b>projects</b>, <b>research</b>, or <b>contact</b>.
        </div>
      </div>`
  },

  'about.html': {
    label:'about.html', type:'md', badge:'html', lang:'HTML', path:['about.html'],
    html:`
      <div class="md">
        <div class="eyebrow">&lt;!-- about.html â€” who I am Â· what I do Â· where I build --&gt;</div>
        <h2>About Me</h2>
        <div class="intro-box">
          <p>Hi! I'm <b style="color:var(--paper-dim)">Varashree H A</b>, a Computer Science undergraduate who thinks
          in systems, not scripts. My work sits at the crossroads of <b style="color:var(--paper-dim)">Artificial
          Intelligence</b>, <b style="color:var(--paper-dim)">Multi-Agent Systems</b> and
          <b style="color:var(--paper-dim)">Healthcare</b>. I care about the distance between a research paper and
          a running system â€” taking ideas like autonomous agents and retrieval-augmented reasoning, and shipping
          them as production software with real interfaces, real APIs and real users in mind.</p>
        </div>

        <div class="focus-title">Current Focus</div>
        <div class="focus-grid">
          <div class="focus-item"><span class="fi-icon">ðŸ¤–</span>Building multi-agent AI frameworks with LangChain &amp; LangGraph</div>
          <div class="focus-item"><span class="fi-icon">ðŸ©º</span>Exploring healthcare AI and digital-twin systems</div>
          <div class="focus-item"><span class="fi-icon">ðŸ”­</span>Currently exploring distributed and explainable AI</div>
          <div class="focus-item"><span class="fi-icon">ðŸ’¬</span>Talk to me about Python, RAG, or agent orchestration</div>
          <div class="focus-item"><span class="fi-icon">âš™ï¸</span>Shipping full-stack products end-to-end, not just demos</div>
          <div class="focus-item"><span class="fi-icon">âœ¨</span>Always learning, always building</div>
        </div>
      </div>`
  },

  'projects.js': {
    label:'projects.js', type:'md', badge:'js', lang:'JavaScript', path:['projects.js'],
    html:`
      <div class="md">
        <div class="eyebrow" style="font-family:var(--font-mono)"><span class="tok-k" style="color:var(--teal)">const</span> projects = [ <span class="tok-s" style="color:var(--amber)">...shipped</span>, <span class="tok-s" style="color:var(--amber)">...building</span> ];</div>
        <h2>Projects</h2>

        <div class="project-grid">
          <div class="proj-card">
            <div class="proj-card-top">
              <span class="proj-icon">ðŸ¤–</span>
              <span class="proj-badge">GitHub â†—</span>
            </div>
            <div class="proj-tags"><span style="color:var(--signal-bright)">AI</span> Â· <span style="color:var(--teal)">MULTI-AGENT</span> Â· <span style="color:var(--amber)">ORCHESTRATION</span></div>
            <h3>Multi-Agent AI Orchestration Framework</h3>
            <p>A supervisor agent that routes intent and delegates to specialized worker agents, reconciling
            their outputs into one coherent response â€” exposed through a Flask API with a React control surface.</p>
            <div class="proj-stack"><span>LangChain</span><span>LangGraph</span><span>Flask</span><span>React</span><span>REST APIs</span></div>
          </div>

          <div class="proj-card">
            <div class="proj-card-top">
              <span class="proj-icon">ðŸ©º</span>
              <span class="proj-badge">GitHub â†—</span>
            </div>
            <div class="proj-tags"><span style="color:var(--signal-bright)">AI</span> Â· <span style="color:var(--teal)">HEALTHCARE</span> Â· <span style="color:var(--amber)">RAG</span></div>
            <h3>MedTwin AI â€” Healthcare Digital Twin</h3>
            <p>A digital twin that mirrors a patient's health data over time, grounding every output in real
            context via retrieval-augmented generation so clinicians can simulate outcomes before they happen.</p>
            <div class="proj-stack"><span>Python</span><span>OpenAI APIs</span><span>HuggingFace</span><span>RAG</span></div>
          </div>

          <div class="proj-card">
            <div class="proj-card-top">
              <span class="proj-icon">ðŸ›’</span>
              <span class="proj-badge">GitHub â†—</span>
            </div>
            <div class="proj-tags"><span style="color:var(--signal-bright)">FULL STACK</span> Â· <span style="color:var(--teal)">MERN</span> Â· <span style="color:var(--amber)">E-COMMERCE</span></div>
            <h3>Product Store</h3>
            <p>A full commerce platform built from the database up â€” product, cart and order flows on a clean
            MongoDB schema, an admin surface, and a responsive React frontend shipped end-to-end.</p>
            <div class="proj-stack"><span>MongoDB</span><span>Express.js</span><span>React</span><span>Node.js</span></div>
          </div>
        </div>
      </div>`
  },

  'skills.json': {
    label:'skills.json', type:'md', badge:'json', lang:'JSON', path:['skills.json'],
    html:`
      <div class="md">
        <div class="eyebrow" style="font-family:var(--font-mono)">{ <span class="tok-p" style="color:var(--signal-bright)">"status"</span>: <span class="tok-s" style="color:var(--amber)">"always_learning"</span>, <span class="tok-p" style="color:var(--signal-bright)">"focus"</span>: <span class="tok-s" style="color:var(--amber)">"ai_systems"</span> }</div>
        <h2>Skills</h2>

        <div class="skills-grid">
          <div>
            <div class="skill-cat-title">Languages</div>
            ${skillBar('Python',88,'var(--signal-bright)')}
            ${skillBar('JavaScript',78,'var(--amber)')}
            ${skillBar('C++',68,'var(--teal)')}
          </div>
          <div>
            <div class="skill-cat-title">AI &amp; ML Engineering</div>
            ${skillBar('LangChain',82,'var(--teal)')}
            ${skillBar('LangGraph',78,'var(--signal-bright)')}
            ${skillBar('RAG Pipelines',80,'var(--amber)')}
            ${skillBar('OpenAI APIs',85,'var(--teal)')}
            ${skillBar('HuggingFace',75,'var(--signal-bright)')}
          </div>
          <div>
            <div class="skill-cat-title">Backend &amp; APIs</div>
            ${skillBar('Flask',80,'var(--signal-bright)')}
            ${skillBar('Node.js',74,'var(--amber)')}
            ${skillBar('Express.js',74,'var(--teal)')}
            ${skillBar('MongoDB',76,'var(--signal-bright)')}
          </div>
          <div>
            <div class="skill-cat-title">Frontend</div>
            ${skillBar('React',80,'var(--amber)')}
          </div>
        </div>

        <div class="skills-note">Self-assessed proficiency â€” a rough map of comfort level, not a benchmark score.</div>
      </div>`
  },

  'experience.ts': {
    label:'experience.ts', type:'md', badge:'ts', lang:'TypeScript', path:['experience.ts'],
    html:`
      <div class="md">
        <div class="eyebrow" style="font-family:var(--font-mono)"><span class="tok-k" style="color:var(--teal)">interface</span> Career <span class="tok-k" style="color:var(--teal)">extends</span> Timeline {}</div>
        <h2>Experience</h2>

        <div class="tl">
          <div class="tl-item current">
            <div class="tl-dot"></div>
            <div class="tl-date">Nov 2025 â€” Jan 2026</div>
            <h3>AI Engineering Intern</h3>
            <div class="tl-role">Multi-Agent Systems &amp; Backend Orchestration</div>
            <p class="tl-desc">Designed and built a collaborative multi-agent AI framework from the ground up,
            implementing a supervisorâ€“worker architecture where specialized agents handle discrete sub-tasks
            under a coordinating controller. Shipped it as a full product: a LangChain-driven orchestration
            layer, a Flask backend exposing clean REST endpoints, and a React frontend integrating live API
            calls â€” taking the framework from architecture diagram to a working, observable system.</p>
            <div class="stack-row">
              <span class="stack-chip">LangChain</span>
              <span class="stack-chip">Flask</span>
              <span class="stack-chip">React</span>
              <span class="stack-chip">API Integration</span>
              <span class="stack-chip">Supervisor-Worker Architecture</span>
            </div>
          </div>
        </div>
      </div>`
  },

  'research.md': {
    label:'research.md', type:'md', badge:'md', lang:'Markdown', path:['research.md'],
    html:`
      <div class="md">
        <div class="eyebrow" style="font-family:var(--font-mono)"><span class="tok-k" style="color:var(--teal)">const</span> interests: string[] = [ ...5 ]</div>
        <h2>Research Interests</h2>
        <p>The threads that connect my projects, reading and long-term direction.</p>

        <div class="interest-block">
          <div class="r-index">R.01</div>
          <h3>Multi-Agent Systems</h3>
          <p>How autonomous agents divide labor, negotiate, and stay coherent as a team rather than a crowd.</p>
        </div>
        <div class="interest-block">
          <div class="r-index">R.02</div>
          <h3>Healthcare AI</h3>
          <p>Applying interpretable, grounded reasoning to clinical data where mistakes carry real weight.</p>
        </div>
        <div class="interest-block">
          <div class="r-index">R.03</div>
          <h3>Digital Twins</h3>
          <p>Building living, continuously-updated models of real-world systems â€” starting with the human body.</p>
        </div>
        <div class="interest-block">
          <div class="r-index">R.04</div>
          <h3>Distributed AI</h3>
          <p>Scaling intelligence across systems and services instead of a single monolithic model.</p>
        </div>
        <div class="interest-block">
          <div class="r-index">R.05</div>
          <h3>Explainable AI</h3>
          <p>Making agentic and generative systems accountable for the decisions they make on our behalf.</p>
        </div>
      </div>`
  },

  'education.md': {
    label:'education.md', type:'md', badge:'md', lang:'Markdown', path:['education.md'],
    html:`
      <div class="md">
        <div class="eyebrow">// academic background</div>
        <h2>Education</h2>
        <div class="edu-card">
          <div class="edu-card-top">
            <h3>ðŸŽ“ Alliance University</h3>
            <span class="edu-cgpa">CGPA 9.5 / 10</span>
          </div>
          <div class="edu-sub">B.Tech, Computer Science Â· Bangalore, India</div>
        </div>
        <p>Coursework and independent projects centered on AI and systems â€” intelligent software, distributed
        systems and applied machine learning, alongside the multi-agent and healthcare-AI work above.</p>
      </div>`
  },

  'contact.css': {
    label:'contact.css', type:'md', badge:'css', lang:'CSS', path:['contact.css'],
    html:`
      <div class="md">
        <div class="eyebrow">/* open to research, engineering &amp; good conversations */</div>
        <h2>Contact</h2>

        <div class="contact-grid">
          <div>
            <div class="cg-title">Find Me On</div>
            <a class="find-card" href="mailto:hello@varashree.dev">
              <span class="find-icon">âœ‰ï¸</span>
              <div><div class="find-label">EMAIL</div><div class="find-value">hello@varashree.dev</div></div>
            </a>
            <a class="find-card" href="https://linkedin.com/in/varashree" target="_blank" rel="noopener">
              <span class="find-icon">ðŸ’¼</span>
              <div><div class="find-label">LINKEDIN</div><div class="find-value">linkedin.com/in/varashree</div></div>
            </a>
            <a class="find-card" href="https://github.com/varashree" target="_blank" rel="noopener">
              <span class="find-icon">ðŸ™</span>
              <div><div class="find-label">GITHUB</div><div class="find-value">github.com/varashree</div></div>
            </a>
            <a class="find-card" href="#" target="_blank" rel="noopener">
              <span class="find-icon">ðŸŽ“</span>
              <div><div class="find-label">GOOGLE SCHOLAR</div><div class="find-value">scholar.google.com/varashree</div></div>
            </a>
          </div>
          <div>
            <div class="cg-title">Send a Message</div>
            <div class="fake-field"><label>// your_name *</label><input class="fake-input" type="text" placeholder="string"></div>
            <div class="fake-field"><label>// your_email *</label><input class="fake-input" type="text" placeholder="string"></div>
            <div class="fake-field"><label>// subject</label><input class="fake-input" type="text" placeholder="string"></div>
            <div class="fake-field"><label>// message *</label><textarea class="fake-textarea" placeholder="'''your message'''"></textarea></div>
            <button class="send-btn" id="fakeSendBtn">â†’ send_message()</button>
            <div class="contact-note">// this form is a visual placeholder â€” email hello@varashree.dev directly for now</div>
          </div>
        </div>
      </div>`
  },

  'README.md': {
    label:'README.md', type:'md', badge:'md', lang:'Markdown', path:['README.md'],
    html:`
      <div class="md">
        <div class="eyebrow"># README.md</div>
        <h2>varashree-ha / portfolio</h2>
        <p>This portfolio is built to feel like the actual workspace of an AI engineer â€” a file explorer,
        editor tabs, a working command palette, and an integrated terminal that responds to real commands.</p>
        <div class="focus-title">Try It</div>
        <div class="focus-grid">
          <div class="focus-item"><span class="fi-icon">âŒ˜</span>Press <b style="color:var(--paper-dim)">Ctrl / âŒ˜ + K</b> to open the command palette</div>
          <div class="focus-item"><span class="fi-icon">âŒ¨ï¸</span>Open the terminal and type <b style="color:var(--paper-dim)">help</b></div>
          <div class="focus-item"><span class="fi-icon">ðŸ“</span>Click any file in the sidebar to open it as a tab</div>
          <div class="focus-item"><span class="fi-icon">ðŸ–±ï¸</span>Try <b style="color:var(--paper-dim)">open about.html</b> straight from the terminal</div>
        </div>
      </div>`
  }
};

function skillBar(name, pct, color){
  return `<div class="skill-row">
    <div class="skill-row-top"><span class="sk-name">${name}</span><span class="sk-pct" style="color:${color}">${pct}%</span></div>
    <div class="skill-bar-track"><div class="skill-bar-fill" data-pct="${pct}" style="background:${color}"></div></div>
  </div>`;
}


function quickCard(file, title, desc, badge){
  return `<div class="quick-card" data-open="${file}">
    <div class="qc-top">
      <span class="qc-title">${title}</span>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
    </div>
    <div class="qc-desc">${desc}</div>
  </div>`;
}

/* Flat file list, in display order (matches a real repo root â€” no nested folders) */
const ROOT_FILES = ['home.tsx','about.html','projects.js','skills.json','experience.ts','research.md','education.md','contact.css','README.md'];

/* ============================================================
   STATE
   ============================================================ */
let openTabs = ['home.tsx'];
let activeFile = 'home.tsx';

/* ============================================================
   RENDER: SIDEBAR TREE
   ============================================================ */
const treeEl = document.getElementById('tree');
function badgeHTML(type){
  const map = { md:'MD', ts:'TS', json:'{}', tsx:'TSX', html:'</>', js:'JS', css:'#' };
  return `<span class="badge ${type}">${map[type]}</span>`;
}
function buildTree(){
  treeEl.innerHTML = ROOT_FILES.map(key => fileRow(key)).join('');
}
function fileRow(key){
  const f = FILES[key];
  return `<li><div class="tree-row file" data-file="${key}">
    ${badgeHTML(f.badge)}<span class="name">${f.label}</span>
  </div></li>`;
}
buildTree();

treeEl.addEventListener('click', (e) => {
  const folderRow = e.target.closest('.tree-row.folder');
  if (folderRow){ folderRow.closest('.tree-folder').classList.toggle('collapsed'); return; }
  const fileRowEl = e.target.closest('.tree-row.file');
  if (fileRowEl){ openFile(fileRowEl.dataset.file); }
});

/* ============================================================
   RENDER: TABS / BREADCRUMB / EDITOR
   ============================================================ */
const tabbarEl = document.getElementById('tabbar');
const breadcrumbEl = document.getElementById('breadcrumb');
const editorContentEl = document.getElementById('editorContent');
const editorScrollEl = document.getElementById('editorScroll');
const sbFileEl = document.getElementById('sbFile');
const sbLangEl = document.getElementById('sbLang');

function renderTabs(){
  if (!openTabs.length){
    tabbarEl.innerHTML = '';
    renderEmptyState();
    breadcrumbEl.innerHTML = '';
    sbFileEl.textContent = 'no file';
    sbLangEl.textContent = 'â€”';
    return;
  }
  tabbarEl.innerHTML = openTabs.map(key => {
    const f = FILES[key];
    const active = key === activeFile ? 'active' : '';
    return `<div class="tab ${active}" data-tab="${key}">
      ${badgeHTML(f.badge)}<span>${f.label}</span>
      <span class="tab-close" data-close="${key}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>
      </span>
    </div>`;
  }).join('');
}

function renderBreadcrumb(){
  const f = FILES[activeFile];
  const parts = ['varashree-ha', ...f.path];
  breadcrumbEl.innerHTML = parts.map((p,i) => {
    const isLast = i === parts.length - 1;
    return `<span class="crumb ${isLast?'current':''}">${p}</span>${isLast?'':'<span class="sep">/</span>'}`;
  }).join('');
}

function renderEmptyState(){
  editorContentEl.className = 'editor-content in';
  editorContentEl.style.maxWidth = 'none';
  editorContentEl.innerHTML = `<div class="empty-state">
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M4 4h6l2 2h8v12a2 2 0 0 1-2 2H4z"/></svg>
    <div>No file open</div>
    <button id="emptyOpenBtn">Open home.tsx</button>
  </div>`;
  document.getElementById('emptyOpenBtn').addEventListener('click', () => openFile('home.tsx'));
}

function renderEditor(){
  const f = FILES[activeFile];
  editorContentEl.classList.remove('in');
  editorContentEl.style.maxWidth = '';
  setTimeout(() => {
    if (f.type === 'md'){
      editorContentEl.innerHTML = f.html;
    } else {
      const titleBlock = f.title ? `<div class="cs-title"><h2>${f.title}</h2><div class="cs-role">${f.role}</div></div>` : '';
      editorContentEl.innerHTML = `<div class="code-block">${titleBlock}${codeLines(f.lines)}</div>`;
    }
    requestAnimationFrame(() => editorContentEl.classList.add('in'));
    editorScrollEl.scrollTop = 0;
  }, 60);
}

function bindQuickCards(){
  editorContentEl.querySelectorAll('[data-open]').forEach(el => {
    el.addEventListener('click', () => openFile(el.dataset.open));
  });
  runSkillBars();
  runTypingLine();
}

let typingTimer = null;
function runTypingLine(){
  const el = document.getElementById('typingLine');
  if (!el) return;
  clearTimeout(typingTimer);
  const phrases = ['Turning research into real-world impact.', 'Turning agents into applications.', 'Turning ideas into intelligent systems.'];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion){ el.innerHTML = phrases[0] + '<span class="cursor"></span>'; return; }
  let phraseIdx = 0, charIdx = 0, deleting = false;
  function tick(){
    const phrase = phrases[phraseIdx];
    charIdx += deleting ? -1 : 1;
    el.innerHTML = phrase.slice(0, charIdx) + '<span class="cursor"></span>';
    let delay = deleting ? 28 : 48;
    if (!deleting && charIdx === phrase.length){ delay = 1400; deleting = true; }
    else if (deleting && charIdx === 0){ deleting = false; phraseIdx = (phraseIdx+1) % phrases.length; delay = 400; }
    typingTimer = setTimeout(tick, delay);
  }
  tick();
}

function runSkillBars(){
  document.querySelectorAll('.skill-bar-fill[data-pct]').forEach(el => {
    requestAnimationFrame(() => { el.style.width = el.dataset.pct + '%'; });
  });
}

function openFile(key){
  if (!FILES[key]) return;
  if (!openTabs.includes(key)) openTabs.push(key);
  activeFile = key;
  renderTabs();
  renderBreadcrumb();
  renderEditor();
  sbFileEl.textContent = FILES[key].label;
  sbLangEl.textContent = FILES[key].lang;
  highlightTreeActive();
  setTimeout(bindQuickCards, 80);
  if (window.innerWidth <= 900) closeSidebarMobile();
}

function closeTab(key){
  const idx = openTabs.indexOf(key);
  if (idx === -1) return;
  openTabs.splice(idx,1);
  if (activeFile === key){
    if (openTabs.length){
      activeFile = openTabs[Math.max(0, idx-1)];
    } else {
      renderTabs();
      return;
    }
  }
  renderTabs();
  renderBreadcrumb();
  renderEditor();
  sbFileEl.textContent = FILES[activeFile].label;
  sbLangEl.textContent = FILES[activeFile].lang;
  highlightTreeActive();
  setTimeout(bindQuickCards, 80);
}

function highlightTreeActive(){
  document.querySelectorAll('.tree-row.file').forEach(el => {
    el.classList.toggle('active', el.dataset.file === activeFile);
  });
}

tabbarEl.addEventListener('click', (e) => {
  const closeBtn = e.target.closest('[data-close]');
  if (closeBtn){ e.stopPropagation(); closeTab(closeBtn.dataset.close); return; }
  const tab = e.target.closest('.tab');
  if (tab){
    activeFile = tab.dataset.tab;
    renderTabs(); renderBreadcrumb(); renderEditor();
    sbFileEl.textContent = FILES[activeFile].label;
    sbLangEl.textContent = FILES[activeFile].lang;
    highlightTreeActive();
    setTimeout(bindQuickCards, 80);
  }
});

/* initial render */
renderTabs(); renderBreadcrumb(); renderEditor(); highlightTreeActive();
setTimeout(bindQuickCards, 80);

/* ============================================================
   SIDEBAR / ACTIVITY BAR TOGGLES
   ============================================================ */
const sidebarEl = document.getElementById('sidebar');
const abExplorer = document.getElementById('abExplorer');
const abSearch = document.getElementById('abSearch');
const abTerminal = document.getElementById('abTerminal');
const abContact = document.getElementById('abContact');
const menuBtn = document.getElementById('menuBtn');

function toggleSidebar(){ sidebarEl.classList.toggle('collapsed'); }
function closeSidebarMobile(){ if (window.innerWidth <= 900) sidebarEl.classList.add('collapsed'); }

abExplorer.addEventListener('click', () => { setActiveIcon(abExplorer); toggleSidebar(); });
menuBtn.addEventListener('click', toggleSidebar);
abSearch.addEventListener('click', () => openPalette());
abContact.addEventListener('click', () => openFile('contact.css'));

function setActiveIcon(el){
  [abExplorer, abSearch, abTerminal, abContact].forEach(i => i.classList.remove('active'));
  el.classList.add('active');
}

if (window.innerWidth <= 900) sidebarEl.classList.add('collapsed');

/* ============================================================
   PANEL (Problems / Output / Terminal)
   ============================================================ */
const panelEl = document.getElementById('panel');
const panelBodyEl = document.getElementById('panelBody');
const panelTabs = document.querySelectorAll('.panel-tab');
const panelCloseBtn = document.getElementById('panelCloseBtn');
const terminalToggleBtn = document.getElementById('terminalToggleBtn');
let activePanelTab = 'terminal';
let termInputEl, termEl;
let termHistory = [];
let termHistoryIdx = -1;

function togglePanel(forceOpen){
  const shouldOpen = forceOpen !== undefined ? forceOpen : panelEl.classList.contains('hidden');
  panelEl.classList.toggle('hidden', !shouldOpen);
  setActiveIcon(shouldOpen ? abTerminal : abExplorer);
  if (shouldOpen && activePanelTab === 'terminal') setTimeout(() => termInputEl && termInputEl.focus(), 260);
}
terminalToggleBtn.addEventListener('click', () => togglePanel());
abTerminal.addEventListener('click', () => togglePanel(true));
document.getElementById('menuTerminal').addEventListener('click', () => togglePanel(true));
document.getElementById('menuHelp').addEventListener('click', () => openPalette());
document.getElementById('menuRun').addEventListener('click', () => togglePanel(true));
panelCloseBtn.addEventListener('click', () => togglePanel(false));

panelTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    panelTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activePanelTab = tab.dataset.ptab;
    renderPanelBody();
  });
});

function renderPanelBody(){
  if (activePanelTab === 'problems'){
    panelBodyEl.innerHTML = `<div class="panel-static"><span class="ok">âœ“</span> No problems have been detected in the workspace.</div>`;
  } else if (activePanelTab === 'output'){
    panelBodyEl.innerHTML = `<div class="panel-static">[build] Compiling workspaceâ€¦
[build] 0 errors, 0 warnings.
[build] <span class="ok">Build succeeded â€” ready for opportunities.</span></div>`;
  } else {
    panelBodyEl.innerHTML = `
      <div class="terminal" id="terminal">
        <div class="term-line"><span class="term-prompt">varashree@portfolio</span><span class="term-cmd">:~$ welcome</span></div>
        <div class="term-output">Type <span class="h">help</span> to see available commands. Try <span class="h">whoami</span>, <span class="h">skills</span>, <span class="h">projects</span>, <span class="h">research</span>, or <span class="h">contact</span>.</div>
      </div>
      <div class="term-input-row">
        <span class="term-prompt">varashree@portfolio:~$</span>
        <input class="term-input" id="termInput" type="text" autocomplete="off" spellcheck="false" placeholder="type a commandâ€¦">
      </div>`;
    termInputEl = document.getElementById('termInput');
    termEl = document.getElementById('terminal');
    bindTerminalInput();
  }
}
renderPanelBody();

/* ============================================================
   TERMINAL
   ============================================================ */
const TERM_RESPONSES = {
  whoami: `<span class="h">Varashree H A</span>
AI Engineer Â· Research Enthusiast Â· Full Stack Developer
Based in Bangalore, India â€” building intelligent systems that turn research into real-world impact.`,

  skills: `<span class="t">languages</span>     Python, C++, JavaScript
<span class="t">ai_ml</span>         LangChain, LangGraph, OpenAI APIs, HuggingFace, RAG
<span class="t">backend</span>       Flask, Node.js, Express.js, MongoDB
<span class="t">frontend</span>      React
<span class="a">â†’ open skills.json for the structured version</span>`,

  projects: `<span class="h">1.</span> Multi-Agent AI Orchestration Framework â€” supervisor/worker agent architecture
<span class="h">2.</span> MedTwin AI â€” healthcare digital twin powered by RAG
<span class="h">3.</span> Product Store â€” full-stack MERN commerce platform
<span class="a">â†’ try: open projects.js</span>`,

  research: `<span class="h">R.01</span> Multi-Agent Systems
<span class="h">R.02</span> Healthcare AI
<span class="h">R.03</span> Digital Twins
<span class="h">R.04</span> Distributed AI
<span class="h">R.05</span> Explainable AI
<span class="a">â†’ open research.md for details</span>`,

  contact: `<span class="t">email</span>      hello@varashree.dev
<span class="t">location</span>   Bangalore, India
<span class="t">github</span>     github.com/varashree
<span class="t">linkedin</span>   linkedin.com/in/varashree
<span class="t">status</span>     open_to_opportunities`,

  education: `<span class="h">Alliance University</span> â€” B.Tech, Computer Science
CGPA 9.5 / 10 Â· Bangalore, India`,

  experience: `<span class="h">AI Engineering Intern</span> â€” Nov 2025 â€“ Jan 2026
Built a multi-agent framework: LangChain orchestration, Flask APIs, React interfaces.`,

  help: `Available commands:
  <span class="h">whoami</span>      quick introduction
  <span class="h">skills</span>      technical skill set
  <span class="h">projects</span>    selected work
  <span class="h">research</span>    research interests
  <span class="h">experience</span>  work experience
  <span class="h">education</span>   academic background
  <span class="h">contact</span>     get in touch
  <span class="h">open &lt;file&gt;</span>  open a file, e.g. "open about.html"
  <span class="h">clear</span>       clear the terminal`
};

function bindTerminalInput(){
  if (!termInputEl) return;
  termInputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
      const raw = termInputEl.value.trim();
      if (!raw) return;
      termHistory.push(raw); termHistoryIdx = termHistory.length;
      runCommand(raw);
      termInputEl.value = '';
    } else if (e.key === 'ArrowUp'){
      if (termHistoryIdx > 0){ termHistoryIdx--; termInputEl.value = termHistory[termHistoryIdx] || ''; }
      e.preventDefault();
    } else if (e.key === 'ArrowDown'){
      if (termHistoryIdx < termHistory.length){ termHistoryIdx++; termInputEl.value = termHistory[termHistoryIdx] || ''; }
      e.preventDefault();
    }
  });
}

function appendTermLine(cmd, outputHTML){
  const line = document.createElement('div');
  line.className = 'term-line';
  line.innerHTML = `<span class="term-prompt">varashree@portfolio</span><span class="term-cmd">:~$ ${escapeHTML(cmd)}</span>`;
  termEl.appendChild(line);
  if (outputHTML !== null){
    const out = document.createElement('div');
    out.className = 'term-output';
    out.innerHTML = outputHTML;
    termEl.appendChild(out);
  }
  panelBodyEl.scrollTop = panelBodyEl.scrollHeight;
}
function escapeHTML(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function runCommand(raw){
  const lower = raw.toLowerCase();
  if (lower === 'clear'){
    termEl.innerHTML = '';
    return;
  }
  if (lower.startsWith('open ')){
    const query = lower.replace('open ','').trim();
    const match = Object.keys(FILES).find(k => FILES[k].label.toLowerCase() === query || k.toLowerCase() === query || FILES[k].label.toLowerCase().includes(query));
    if (match){
      appendTermLine(raw, `<span class="t">Opening ${FILES[match].label}â€¦</span>`);
      openFile(match);
      togglePanel(true);
    } else {
      appendTermLine(raw, `<span class="err">file not found: "${query}"</span>`);
    }
    return;
  }
  if (TERM_RESPONSES[lower]){
    appendTermLine(raw, TERM_RESPONSES[lower]);
    return;
  }
  appendTermLine(raw, `<span class="err">command not found:</span> ${escapeHTML(raw)} â€” type <span class="h">help</span> for available commands.`);
}

/* ============================================================
   COMMAND PALETTE
   ============================================================ */
const cpOverlay = document.getElementById('cpOverlay');
const cpInput = document.getElementById('cpInput');
const cpList = document.getElementById('cpList');
const tbSearch = document.getElementById('tbSearch');

const CP_COMMANDS = [
  { name:'Toggle Terminal', action:() => togglePanel(), icon:'âŒ˜' },
  { name:'Open Contact', action:() => openFile('contact.css'), icon:'âŒ˜' },
];

function cpItems(query){
  const q = query.toLowerCase();
  const fileItems = Object.keys(FILES)
    .filter(k => FILES[k].label.toLowerCase().includes(q) || k.toLowerCase().includes(q))
    .map(k => ({ type:'file', key:k, name:FILES[k].label, path:'/'+FILES[k].path.join('/'), badge:FILES[k].badge }));
  const cmdItems = CP_COMMANDS
    .filter(c => c.name.toLowerCase().includes(q))
    .map(c => ({ type:'cmd', name:c.name, action:c.action }));
  return [...fileItems, ...cmdItems];
}

let cpActiveIndex = 0;
function renderPalette(){
  const items = cpItems(cpInput.value);
  if (!items.length){
    cpList.innerHTML = `<div class="cp-empty">No matches. Try "about", "skills", or "terminal".</div>`;
    return;
  }
  cpActiveIndex = Math.min(cpActiveIndex, items.length-1);
  cpList.innerHTML = items.map((it,i) => {
    const active = i === cpActiveIndex ? 'active' : '';
    if (it.type === 'file'){
      return `<div class="cp-item ${active}" data-idx="${i}">${badgeHTML(it.badge)}<span class="cp-name">${it.name}</span><span class="cp-path">${it.path}</span></div>`;
    }
    return `<div class="cp-item ${active}" data-idx="${i}"><span class="badge md" style="background:var(--surface-4);color:var(--mist)">âŒ˜</span><span class="cp-name">${it.name}</span></div>`;
  }).join('');
  cpList.querySelectorAll('.cp-item').forEach(el => {
    el.addEventListener('click', () => selectPaletteItem(items[+el.dataset.idx]));
  });
}
function selectPaletteItem(item){
  if (!item) return;
  if (item.type === 'file') openFile(item.key);
  else if (item.type === 'cmd') item.action();
  closePalette();
}
function openPalette(){
  cpOverlay.classList.add('open');
  cpInput.value = ''; cpActiveIndex = 0;
  renderPalette();
  setTimeout(() => cpInput.focus(), 60);
}
function closePalette(){ cpOverlay.classList.remove('open'); }

tbSearch.addEventListener('click', openPalette);
cpOverlay.addEventListener('mousedown', (e) => { if (e.target === cpOverlay) closePalette(); });
cpInput.addEventListener('input', () => { cpActiveIndex = 0; renderPalette(); });
cpInput.addEventListener('keydown', (e) => {
  const items = cpItems(cpInput.value);
  if (e.key === 'ArrowDown'){ cpActiveIndex = Math.min(cpActiveIndex+1, items.length-1); renderPalette(); e.preventDefault(); }
  else if (e.key === 'ArrowUp'){ cpActiveIndex = Math.max(cpActiveIndex-1, 0); renderPalette(); e.preventDefault(); }
  else if (e.key === 'Enter'){ selectPaletteItem(items[cpActiveIndex]); }
  else if (e.key === 'Escape'){ closePalette(); }
});

const isMac = /Mac|iPhone|iPod|iPad/i.test(navigator.platform || '');
document.getElementById('cpKbd').textContent = isMac ? 'âŒ˜ K' : 'Ctrl K';

window.addEventListener('keydown', (e) => {
  const mod = isMac ? e.metaKey : e.ctrlKey;
  if (mod && e.key.toLowerCase() === 'k'){ e.preventDefault(); cpOverlay.classList.contains('open') ? closePalette() : openPalette(); }
  else if (mod && e.key.toLowerCase() === 'j'){ e.preventDefault(); togglePanel(); }
  else if (e.key === 'Escape'){ closePalette(); }
});

/* ============================================================
   STATUS BAR CLOCK
   ============================================================ */
const sbClockEl = document.getElementById('sbClock');
function updateClock(){
  const now = new Date();
  const opts = { timeZone:'Asia/Kolkata', hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false };
  try{
    sbClockEl.textContent = new Intl.DateTimeFormat('en-GB', opts).format(now) + ' IST';
  }catch(e){
    sbClockEl.textContent = now.toLocaleTimeString();
  }
}
updateClock();
setInterval(updateClock, 1000);

/* ============================================================
   STARFIELD â€” subtle, low density, behind the floating window
   ============================================================ */
(function(){
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W,H,dpr;
  let stars = [];

  function resize(){
    dpr = Math.min(window.devicePixelRatio||1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W*dpr; canvas.height = H*dpr;
    canvas.style.width = W+'px'; canvas.style.height = H+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    build();
  }
  function build(){
    const n = Math.round(90 * Math.min(1.3, (W*H)/(1440*900)));
    stars = [];
    for (let i=0;i<n;i++){
      stars.push({
        x:Math.random()*W, y:Math.random()*H,
        r: 0.5 + Math.random()*1.4,
        a: 0.15 + Math.random()*0.35,
        phase: Math.random()*Math.PI*2,
        amp: 0.15 + Math.random()*0.25
      });
    }
  }
  let t = 0;
  function draw(){
    t += 0.005;
    ctx.clearRect(0,0,W,H);
    stars.forEach(s => {
      const tw = reduceMotion ? 1 : (1 - s.amp/2 + Math.sin(t*1.1+s.phase)*s.amp/2);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(233,234,239,${Math.max(0, s.a*tw)})`;
      ctx.fill();
    });
    if (!reduceMotion && !document.hidden) requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize, { passive:true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden && !reduceMotion) requestAnimationFrame(draw); });
  resize();
  draw();
})();

