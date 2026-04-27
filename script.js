const items = {
  work: folder('Work', 'C:\\Portfolio\\Work', [childFolder('web-design','Web Design'), childFolder('graphic-design','Graphic Design'), childFolder('motion-design','Motion Design')]),
  'web-design': folder('Web Design', 'C:\\Portfolio\\Work\\Web Design', [childFile('web-project-01','portfolio-redesign.website'), childFile('web-project-02','landing-page-concept.website'), childFile('web-notes','replace-with-your-web-projects.txt')]),
  'graphic-design': folder('Graphic Design', 'C:\\Portfolio\\Work\\Graphic Design', [childFile('graphic-project-01','brand-system-placeholder.ai'), childFile('graphic-project-02','poster-series-placeholder.psd'), childFile('graphic-notes','replace-with-your-design-work.txt')]),
  'motion-design': folder('Motion Design', 'C:\\Portfolio\\Work\\Motion Design', [childFile('motion-project-01','motion-reel-placeholder.mp4'), childFile('motion-project-02','social-animation-placeholder.mov'), childFile('motion-notes','replace-with-your-motion-work.txt')]),
  freelance: folder('Freelance', 'C:\\Portfolio\\Freelance', [childFolder('web-projects','Web Projects')]),
  'web-projects': folder('Web Projects', 'C:\\Portfolio\\Freelance\\Web Projects', [childFolder('wegenweere','Wegenweere'), childFolder('avansa','Avansa')]),
  wegenweere: folder('Wegenweere', 'C:\\Portfolio\\Freelance\\Web Projects\\Wegenweere', [childFile('wegenweere-homepage','homepage.website'), childFile('wegenweere-mobile','mobile-layout.website'), childFile('wegenweere-notes','replace-with-wegenweere-assets.txt')]),
  avansa: folder('Avansa', 'C:\\Portfolio\\Freelance\\Web Projects\\Avansa', [childFile('avansa-landing','landing-page.website'), childFile('avansa-case-study','case-study-draft.txt'), childFile('avansa-notes','replace-with-avansa-assets.txt')]),
  'art-tattoo': folder('Art & Tattoo', 'C:\\Portfolio\\Art & Tattoo', [childFolder('tattoo-work','Tattoo Work'), childFolder('drawings','Drawings')]),
  'tattoo-work': folder('Tattoo Work', 'C:\\Portfolio\\Art & Tattoo\\Tattoo Work', [childFile('tattoo-flash-01','tattoo-flash-placeholder.png'), childFile('tattoo-piece-01','tattoo-piece-placeholder.png'), childFile('tattoo-instagram','instagram-link-placeholder.url')]),
  drawings: folder('Drawings', 'C:\\Portfolio\\Art & Tattoo\\Drawings', [childFolder('model-drawings','Model Drawings'), childFolder('sketches-experiments','Sketches & Experiments')]),
  'model-drawings': folder('Model Drawings', 'C:\\Portfolio\\Art & Tattoo\\Drawings\\Model Drawings', [childFile('model-drawing-01','model-drawing-01.png'), childFile('model-drawing-02','model-drawing-02.png'), childFile('model-drawing-notes','replace-with-model-drawings.txt')]),
  'sketches-experiments': folder('Sketches & Experiments', 'C:\\Portfolio\\Art & Tattoo\\Drawings\\Sketches & Experiments', [childFile('sketch-01','sketchbook-page-01.png'), childFile('sketch-02','random-study-01.png'), childFile('sketch-notes','replace-with-sketches.txt')]),
  about: folder('About', 'C:\\Portfolio\\About', [childFile('curriculum-vitae','Curriculum Vitae.doc'), childFile('me','Me.png'), childFile('bio','bio.txt'), childFile('tools','tools-and-skills.txt')]),
  paint: { type:'paint', title:'Paint', address:'C:\\Portfolio\\Paint', html:`<div class="paint-app"><div class="paint-toolbar"><label>Brush <input id="paint-size" type="range" min="1" max="30" value="6"></label><label>Color <input id="paint-color" type="color" value="#000000"></label><button class="xp-action" id="paint-eraser" type="button">Eraser</button><button class="xp-action" id="paint-clear" type="button">Clear</button><button class="xp-action" id="paint-download" type="button">Save PNG</button></div><canvas id="paint-canvas" width="760" height="430" aria-label="Drawing canvas"></canvas><form class="send-drawing-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST"><input type="hidden" name="drawingDataUrl" id="drawing-data-url"><label>Your email, optional<input name="email" type="email" placeholder="you@example.com"></label><label>Message, optional<textarea name="message" placeholder="I drew this for you!"></textarea></label><button class="xp-action" type="submit">Send drawing</button><p class="contact-note">Static sites need a form service to send drawings. Replace <code>https://formspree.io/f/YOUR_FORM_ID</code> with your endpoint. The form includes the drawing as a PNG data URL.</p></form></div>` },
  'missing-skills': { type:'bsod', title:'Missing Skills', address:'C:\\Recycle Bin\\Missing Skills', html:`<div class="bsod-screen"><div class="bsod-title">Windows</div><p>A fatal exception 404 has occurred at PORTFOLIO:0000MISSING.</p><p><strong>Missing skills not found.</strong></p><p>The requested weakness could not be located. The designer may have moved it, renamed it, or replaced it with stubborn curiosity.</p><button class="bsod-back" type="button" data-close-bsod>← Back</button></div>` },
  contact: { type:'doc', title:'contact', address:'C:\\Portfolio\\contact', html:`<div class="file-preview"><h2>Contact</h2><form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST"><label>Name<input name="name" placeholder="Your name" /></label><label>Email<input type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea name="message" placeholder="Write your message here"></textarea></label><button class="xp-action" type="submit">Send message</button><p class="contact-note">Replace <code>https://formspree.io/f/YOUR_FORM_ID</code> with your own form endpoint.</p></form></div>` },
  'curriculum-vitae': {type:'doc', title:'Curriculum Vitae.doc', address:'C:\\Portfolio\\About\\Curriculum Vitae.doc', asset:'assets/about/curriculum-vitae.doc', html:`<div class="file-preview doc-preview"><h2>Curriculum Vitae.doc</h2><p>This is a placeholder CV preview.</p><p>Replace <code>assets/about/curriculum-vitae.doc</code> with your real CV file.</p><a class="xp-action" href="assets/about/curriculum-vitae.doc" download>Download placeholder document</a></div>`},
  me: {type:'image', title:'Me.png', address:'C:\\Portfolio\\About\\Me.png', asset:'assets/about/me.png', html:`<div class="file-preview image-preview"><img src="assets/about/me.png" alt="Placeholder portrait" /><p>Replace <code>assets/about/me.png</code> with your actual image.</p></div>`},
  'web-project-01': placeholder('portfolio-redesign.website','assets/work/web-design/portfolio-redesign.website','Placeholder for a professional web design project.'),
  'web-project-02': placeholder('landing-page-concept.website','assets/work/web-design/landing-page-concept.website','Placeholder for another web design project.'),
  'web-notes': placeholder('replace-with-your-web-projects.txt','assets/work/web-design/replace-with-your-web-projects.txt'),
  'graphic-project-01': placeholder('brand-system-placeholder.ai','assets/work/graphic-design/brand-system-placeholder.ai','Placeholder for a brand or identity project.'),
  'graphic-project-02': placeholder('poster-series-placeholder.psd','assets/work/graphic-design/poster-series-placeholder.psd','Placeholder for a graphic design project.'),
  'graphic-notes': placeholder('replace-with-your-design-work.txt','assets/work/graphic-design/replace-with-your-design-work.txt'),
  'motion-project-01': placeholder('motion-reel-placeholder.mp4','assets/work/motion-design/motion-reel-placeholder.mp4','Placeholder for a motion design video.'),
  'motion-project-02': placeholder('social-animation-placeholder.mov','assets/work/motion-design/social-animation-placeholder.mov','Placeholder for an animation or motion asset.'),
  'motion-notes': placeholder('replace-with-your-motion-work.txt','assets/work/motion-design/replace-with-your-motion-work.txt'),
  'wegenweere-homepage': placeholder('homepage.website','assets/freelance/web-projects/wegenweere/homepage.website'),
  'wegenweere-mobile': placeholder('mobile-layout.website','assets/freelance/web-projects/wegenweere/mobile-layout.website'),
  'wegenweere-notes': placeholder('replace-with-wegenweere-assets.txt','assets/freelance/web-projects/wegenweere/replace-with-wegenweere-assets.txt'),
  'avansa-landing': placeholder('landing-page.website','assets/freelance/web-projects/avansa/landing-page.website'),
  'avansa-case-study': placeholder('case-study-draft.txt','assets/freelance/web-projects/avansa/case-study-draft.txt'),
  'avansa-notes': placeholder('replace-with-avansa-assets.txt','assets/freelance/web-projects/avansa/replace-with-avansa-assets.txt'),
  'tattoo-flash-01': imagePlaceholder('tattoo-flash-placeholder.png','assets/art-tattoo/tattoo-work/tattoo-flash-placeholder.png'),
  'tattoo-piece-01': imagePlaceholder('tattoo-piece-placeholder.png','assets/art-tattoo/tattoo-work/tattoo-piece-placeholder.png'),
  'tattoo-instagram': placeholder('instagram-link-placeholder.url','assets/art-tattoo/tattoo-work/instagram-link-placeholder.url','Placeholder for an Instagram link or embed.'),
  'model-drawing-01': imagePlaceholder('model-drawing-01.png','assets/art-tattoo/drawings/model-drawings/model-drawing-01.png'),
  'model-drawing-02': imagePlaceholder('model-drawing-02.png','assets/art-tattoo/drawings/model-drawings/model-drawing-02.png'),
  'model-drawing-notes': placeholder('replace-with-model-drawings.txt','assets/art-tattoo/drawings/model-drawings/replace-with-model-drawings.txt'),
  'sketch-01': imagePlaceholder('sketchbook-page-01.png','assets/art-tattoo/drawings/sketches-experiments/sketchbook-page-01.png'),
  'sketch-02': imagePlaceholder('random-study-01.png','assets/art-tattoo/drawings/sketches-experiments/random-study-01.png'),
  'sketch-notes': placeholder('replace-with-sketches.txt','assets/art-tattoo/drawings/sketches-experiments/replace-with-sketches.txt'),
  bio: placeholder('bio.txt','assets/about/bio.txt','Write a short introduction here.'),
  tools: placeholder('tools-and-skills.txt','assets/about/tools-and-skills.txt','List your tools, skills, and services here.')
};

function folder(title,address,items){return{type:'folder',title,address,items};}
function childFolder(id,label){return{type:'folder',id,label};}
function childFile(id,label){return{type:'file',id,label};}
function placeholder(title,asset,description='Placeholder file for this folder.'){return{type:'doc',title,address:`C:\\Portfolio\\${title}`,asset,html:`<div class="file-preview doc-preview"><h2>${title}</h2><p>${description}</p><p>Replace <code>${asset}</code> with your own file, or add more items in <code>script.js</code>.</p><a class="xp-action" href="${asset}" download>Download placeholder</a></div>`};}
function imagePlaceholder(title,asset){return{type:'image',title,address:`C:\\Portfolio\\${title}`,asset,html:`<div class="file-preview image-preview"><img src="${asset}" alt="${title} placeholder" /><p>Replace <code>${asset}</code> with your own image.</p></div>`};}

const template=document.querySelector('#window-template');
const desktop=document.querySelector('.desktop');
const desktopIcons=document.querySelector('.desktop-icons');
const taskbar=document.querySelector('#taskbar-programs');
const startButton=document.querySelector('#start-button');
const startMenu=document.querySelector('#start-menu');
let zIndex=20;
const openWindows=new Map();

let audioContext;
function playSound(name){
  try{
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;
    osc.type = name === 'error' ? 'square' : 'sine';
    if(name === 'click'){ osc.frequency.setValueAtTime(880, now); gain.gain.setValueAtTime(0.05, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055); }
    else if(name === 'open'){ osc.frequency.setValueAtTime(520, now); osc.frequency.exponentialRampToValueAtTime(920, now + 0.16); gain.gain.setValueAtTime(0.045, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16); }
    else { osc.frequency.setValueAtTime(190, now); osc.frequency.setValueAtTime(120, now + 0.22); gain.gain.setValueAtTime(0.08, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45); }
    osc.connect(gain); gain.connect(audioContext.destination); osc.start(now); osc.stop(now + (name === 'error' ? 0.45 : 0.18));
  }catch{}
}

layoutDesktopIcons();
enableDesktopIconDragging();

function layoutDesktopIcons(){const icons=[...desktopIcons.querySelectorAll('.desktop-icon')];const saved=JSON.parse(localStorage.getItem('xpDesktopIconPositions')||'{}');icons.forEach((icon,index)=>{const id=icon.dataset.open;const pos=saved[id]||{left:0,top:index*88};icon.style.left=`${pos.left}px`;icon.style.top=`${pos.top}px`;});}
function saveDesktopIconPosition(icon){const saved=JSON.parse(localStorage.getItem('xpDesktopIconPositions')||'{}');saved[icon.dataset.open]={left:icon.offsetLeft,top:icon.offsetTop};localStorage.setItem('xpDesktopIconPositions',JSON.stringify(saved));}
function enableDesktopIconDragging(){desktopIcons.querySelectorAll('.desktop-icon').forEach(icon=>{let startX=0,startY=0,initialLeft=0,initialTop=0,moved=false,dragging=false;icon.addEventListener('pointerdown',event=>{if(event.button!==0)return;dragging=true;moved=false;startX=event.clientX;startY=event.clientY;initialLeft=icon.offsetLeft;initialTop=icon.offsetTop;icon.setPointerCapture(event.pointerId);clearSelections();icon.classList.add('selected');});icon.addEventListener('pointermove',event=>{if(!dragging)return;const dx=event.clientX-startX,dy=event.clientY-startY;if(Math.abs(dx)+Math.abs(dy)>4)moved=true;if(!moved)return;icon.classList.add('dragging');const maxLeft=Math.max(0,desktopIcons.clientWidth-icon.offsetWidth);const maxTop=Math.max(0,desktopIcons.clientHeight-icon.offsetHeight);icon.style.left=`${Math.min(maxLeft,Math.max(0,initialLeft+dx))}px`;icon.style.top=`${Math.min(maxTop,Math.max(0,initialTop+dy))}px`;});icon.addEventListener('pointerup',event=>{if(!dragging)return;dragging=false;icon.classList.remove('dragging');try{icon.releasePointerCapture(event.pointerId);}catch{} if(moved)saveDesktopIconPosition(icon);else { playSound('click'); openItem(icon.dataset.open); }});});}

document.querySelectorAll('.start-contact-button,[data-open]').forEach(button=>{if(button.closest('.desktop-icons'))return;button.addEventListener('click',()=>{playSound('click');openItem(button.dataset.open);});});
desktop.addEventListener('click',event=>{if(event.target===desktop)clearSelections();});
startButton.addEventListener('click',event=>{playSound('click');event.stopPropagation();const open=startMenu.classList.toggle('open');startButton.setAttribute('aria-expanded',open?'true':'false');});
document.addEventListener('click',event=>{if(!event.target.closest('.start-menu')&&!event.target.closest('.start-button')){startMenu.classList.remove('open');startButton.setAttribute('aria-expanded','false');}});
function clearSelections(){document.querySelectorAll('.desktop-icon.selected').forEach(el=>el.classList.remove('selected'));}

function iconMiniClass(type){return type==='folder'?'mini-folder':type==='image'?'mini-image':type==='paint'?'mini-paint':type==='bsod'?'mini-recycle':'mini-doc';}

function openItem(id){
  const data=items[id];
  if(!data)return;
  startMenu.classList.remove('open');
  startButton.setAttribute('aria-expanded','false');
  if(data.type==='bsod'){
    openBsod(data);
    return;
  }
  if(openWindows.has(id)){
    const entry=openWindows.get(id);
    entry.windowEl.classList.remove('minimized');
    focusWindow(entry.windowEl);
    return;
  }
  const clone=template.content.firstElementChild.cloneNode(true);
  clone.dataset.windowId=id;
  clone.classList.add(`-window`);
  clone.style.left=`${150+openWindows.size*28}px`;
  clone.style.top=`${62+openWindows.size*24}px`;
  clone.querySelector('.window-title span:last-child').textContent=data.title;
  clone.querySelector('.address-bar span').textContent=data.address;
  clone.querySelector('.mini-icon').classList.add(iconMiniClass(data.type));
  const content=clone.querySelector('.window-content');
  if(data.type==='folder'){
    content.classList.add('folder-view');
    data.items.forEach(item=>content.appendChild(createWindowItem(item)));
  }else{
    content.classList.add('file-view');
    content.innerHTML=data.html;
  }
  clone.querySelector('.back-button').addEventListener('click',()=>{playSound('click');closeWindow(id);});
  clone.querySelectorAll('[data-close-window]').forEach(button=>button.addEventListener('click',()=>{playSound('click');closeWindow(id);}));
  clone.querySelector('.close').addEventListener('click',()=>{playSound('click');closeWindow(id);});
  clone.querySelector('.minimize').addEventListener('click',()=>{playSound('click');minimizeWindow(id);});
  clone.querySelector('.maximize').addEventListener('click',()=>{playSound('click');toggleMaximize(id);});
  clone.addEventListener('mousedown',()=>focusWindow(clone));
  makeDraggable(clone,clone.querySelector('.window-titlebar'));
  makeResizable(clone);
  desktop.appendChild(clone);
  const taskButton=document.createElement('button');
  taskButton.className='taskbar-item';
  taskButton.innerHTML=`<span class="task-icon ${iconMiniClass(data.type)}"></span><span>${data.title}</span>`;
  taskButton.addEventListener('click',()=>{
    playSound('click');
    const isActive=taskButton.classList.contains('active')&&!clone.classList.contains('minimized');
    if(isActive){clone.classList.add('minimized');taskButton.classList.remove('active');return;}
    clone.classList.remove('minimized');
    focusWindow(clone);
  });
  taskbar.appendChild(taskButton);
  openWindows.set(id,{windowEl:clone,taskButton});
  focusWindow(clone);
  playSound('open');
  if(data.type==='paint')initPaintApp(clone);
}
function openBsod(data){
  let overlay=document.querySelector('#bsod-overlay');
  if(!overlay){
    overlay=document.createElement('section');
    overlay.id='bsod-overlay';
    overlay.className='bsod-overlay';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.setAttribute('aria-label','Missing Skills error screen');
    document.body.appendChild(overlay);
  }
  overlay.innerHTML=data.html;
  document.body.classList.add('bsod-active');
  overlay.classList.remove('leaving');
  overlay.classList.add('visible');
  const backButton=overlay.querySelector('[data-close-bsod]');
  if(backButton){
    backButton.focus();
    backButton.addEventListener('click',()=>{playSound('click');closeBsod();});
  }
  playSound('error');
}

function closeBsod(){
  const overlay=document.querySelector('#bsod-overlay');
  if(!overlay)return;
  overlay.classList.add('leaving');
  setTimeout(()=>{
    overlay.classList.remove('visible','leaving');
    overlay.innerHTML='';
    document.body.classList.remove('bsod-active');
  },180);
}

function closeWindow(id){const entry=openWindows.get(id);if(!entry)return;entry.windowEl.remove();entry.taskButton.remove();openWindows.delete(id);}
function minimizeWindow(id){const entry=openWindows.get(id);if(!entry)return;entry.windowEl.classList.add('minimized');entry.taskButton.classList.remove('active');}
function toggleMaximize(id){const entry=openWindows.get(id);if(!entry)return;const win=entry.windowEl;if(win.classList.contains('maximized')){win.classList.remove('maximized');win.querySelector('.maximize').textContent='□';}else{win.classList.remove('minimized');win.classList.add('maximized');win.querySelector('.maximize').textContent='❐';focusWindow(win);}}
function createWindowItem(item){const button=document.createElement('button');button.className=`desktop-icon thumbnail-icon ${item.type==='folder'?'folder':'document'}`;button.innerHTML=`<span class="thumbnail ${thumbnailClass(item.id,item.type)}">${thumbnailContent(item.id,item.type)}</span><span class="icon-art ${item.type==='folder'?'folder-art':fileIconClass(item.id)}"></span><span class="label">${item.label}</span>`;button.addEventListener('click',()=>{document.querySelectorAll('.window-content .desktop-icon.selected').forEach(el=>el.classList.remove('selected'));button.classList.add('selected');playSound('click');openItem(item.id);});return button;}
function thumbnailClass(id,type){const data=items[id]||{};if(type==='folder')return 'folder-thumb';if(data.type==='image')return 'image-thumb';if((data.title||'').match(/mp4|mov/i))return 'video-thumb';if((data.title||'').match(/website/i))return 'web-thumb';return 'doc-thumb';}
function thumbnailContent(id,type){const data=items[id]||{};if(type==='folder')return '<span class="thumb-folder-tab"></span><span class="thumb-folder-page"></span>';if(data.type==='image'&&data.asset)return `<img src="${data.asset}" alt="">`;if((data.title||'').match(/mp4|mov/i))return '<span class="play-triangle">▶</span>';if((data.title||'').match(/website/i))return '<span class="browser-bar"></span><span class="browser-block"></span>';return '<span class="doc-lines"></span>'}
function fileIconClass(id){const type=items[id]?.type;if(type==='image')return'image-art';return'doc-art';}
function focusWindow(windowEl){windowEl.classList.remove('minimized');windowEl.style.zIndex=++zIndex;openWindows.forEach(entry=>{const active=entry.windowEl===windowEl;entry.taskButton.classList.toggle('active',active);entry.windowEl.classList.toggle('inactive',!active);});}
function makeDraggable(windowEl,handle){let startX=0,startY=0,initialLeft=0,initialTop=0,dragging=false;handle.addEventListener('mousedown',event=>{if(event.target.closest('.window-controls')||windowEl.classList.contains('maximized'))return;dragging=true;startX=event.clientX;startY=event.clientY;initialLeft=windowEl.offsetLeft;initialTop=windowEl.offsetTop;focusWindow(windowEl);document.body.style.cursor='move';});window.addEventListener('mousemove',event=>{if(!dragging)return;const maxLeft=Math.max(0,window.innerWidth-120);const maxTop=Math.max(0,window.innerHeight-80);windowEl.style.left=`${Math.min(maxLeft,Math.max(0,initialLeft+event.clientX-startX))}px`;windowEl.style.top=`${Math.min(maxTop,Math.max(0,initialTop+event.clientY-startY))}px`;});window.addEventListener('mouseup',()=>{dragging=false;document.body.style.cursor='';});}
function makeResizable(windowEl){const handle=windowEl.querySelector('.resize-handle');if(!handle)return;let sx=0,sy=0,sw=0,sh=0,resizing=false;handle.addEventListener('mousedown',e=>{if(windowEl.classList.contains('maximized'))return;resizing=true;sx=e.clientX;sy=e.clientY;sw=windowEl.offsetWidth;sh=windowEl.offsetHeight;focusWindow(windowEl);document.body.style.cursor='nwse-resize';e.preventDefault();});window.addEventListener('mousemove',e=>{if(!resizing)return;windowEl.style.width=`${Math.max(360,sw+e.clientX-sx)}px`;windowEl.style.height=`${Math.max(260,sh+e.clientY-sy)}px`;});window.addEventListener('mouseup',()=>{resizing=false;document.body.style.cursor='';});}
function initPaintApp(win){const canvas=win.querySelector('#paint-canvas');const ctx=canvas.getContext('2d');ctx.fillStyle='white';ctx.fillRect(0,0,canvas.width,canvas.height);let drawing=false,eraser=false;const color=win.querySelector('#paint-color');const size=win.querySelector('#paint-size');function pos(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*(canvas.width/r.width),y:(e.clientY-r.top)*(canvas.height/r.height)};}canvas.addEventListener('pointerdown',e=>{drawing=true;canvas.setPointerCapture(e.pointerId);const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);});canvas.addEventListener('pointermove',e=>{if(!drawing)return;const p=pos(e);ctx.lineWidth=size.value;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle=eraser?'white':color.value;ctx.lineTo(p.x,p.y);ctx.stroke();});canvas.addEventListener('pointerup',e=>{drawing=false;try{canvas.releasePointerCapture(e.pointerId);}catch{}});win.querySelector('#paint-eraser').addEventListener('click',e=>{eraser=!eraser;e.currentTarget.classList.toggle('active',eraser);});win.querySelector('#paint-clear').addEventListener('click',()=>{ctx.fillStyle='white';ctx.fillRect(0,0,canvas.width,canvas.height);});win.querySelector('#paint-download').addEventListener('click',()=>{const a=document.createElement('a');a.href=canvas.toDataURL('image/png');a.download='visitor-drawing.png';a.click();});win.querySelector('.send-drawing-form').addEventListener('submit',()=>{win.querySelector('#drawing-data-url').value=canvas.toDataURL('image/png');});}
function updateClock(){document.querySelector('#clock').textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});} updateClock();setInterval(updateClock,1000);
