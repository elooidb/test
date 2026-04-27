const items = {
  work: {
    type: 'folder',
    title: 'work',
    address: 'C:\\Portfolio\\work',
    items: [
      { type: 'folder', id: 'website', label: 'website' },
      { type: 'folder', id: 'graphic-design', label: 'graphic design' }
    ]
  },
  website: {
    type: 'folder',
    title: 'website',
    address: 'C:\\Portfolio\\work\\website',
    items: [
      { type: 'file', id: 'website-placeholder', label: 'website-placeholder.txt' }
    ]
  },
  'graphic-design': {
    type: 'folder',
    title: 'graphic design',
    address: 'C:\\Portfolio\\work\\graphic-design',
    items: [
      { type: 'file', id: 'graphic-design-placeholder', label: 'graphic-design-placeholder.txt' }
    ]
  },
  freelance: {
    type: 'folder',
    title: 'freelance',
    address: 'C:\\Portfolio\\freelance',
    items: [
      { type: 'folder', id: 'wegenweere', label: 'wegenweere' },
      { type: 'folder', id: 'avansa', label: 'avansa' }
    ]
  },
  wegenweere: {
    type: 'folder',
    title: 'wegenweere',
    address: 'C:\\Portfolio\\freelance\\wegenweere',
    items: [
      { type: 'file', id: 'wegenweere-placeholder', label: 'wegenweere-placeholder.txt' }
    ]
  },
  avansa: {
    type: 'folder',
    title: 'avansa',
    address: 'C:\\Portfolio\\freelance\\avansa',
    items: [
      { type: 'file', id: 'avansa-placeholder', label: 'avansa-placeholder.txt' }
    ]
  },
  'passion-projects': {
    type: 'folder',
    title: 'passions projects',
    address: 'C:\\Portfolio\\passions-projects',
    items: [
      { type: 'folder', id: 'drawings', label: 'drawings' }
    ]
  },
  drawings: {
    type: 'folder',
    title: 'drawings',
    address: 'C:\\Portfolio\\passions-projects\\drawings',
    items: [
      { type: 'file', id: 'drawings-placeholder', label: 'drawings-placeholder.txt' }
    ]
  },
  'curriculum-vitae': {
    type: 'doc',
    title: 'curriculum vitae.doc',
    address: 'C:\\Portfolio\\curriculum vitae.doc',
    asset: 'assets/curriculum-vitae.doc',
    html: `
      <div class="file-preview doc-preview">
        <h2>curriculum vitae.doc</h2>
        <p>This is a placeholder document preview.</p>
        <p>Replace <code>assets/curriculum-vitae.doc</code> with your real CV file. You can also edit this text in <code>script.js</code>.</p>
        <a class="xp-action" href="assets/curriculum-vitae.doc" download>Download placeholder document</a>
      </div>`
  },
  me: {
    type: 'image',
    title: 'me.png',
    address: 'C:\\Portfolio\\me.png',
    asset: 'assets/me.png',
    html: `
      <div class="file-preview image-preview">
        <img src="assets/me.png" alt="Placeholder portrait" />
        <p>Replace <code>assets/me.png</code> with your actual image, keeping the same filename, or update the path in <code>script.js</code>.</p>
      </div>`
  },
  'website-placeholder': placeholder('website-placeholder.txt', 'assets/work/website/website-placeholder.txt'),
  'graphic-design-placeholder': placeholder('graphic-design-placeholder.txt', 'assets/work/graphic-design/graphic-design-placeholder.txt'),
  'wegenweere-placeholder': placeholder('wegenweere-placeholder.txt', 'assets/freelance/wegenweere/wegenweere-placeholder.txt'),
  'avansa-placeholder': placeholder('avansa-placeholder.txt', 'assets/freelance/avansa/avansa-placeholder.txt'),
  'drawings-placeholder': placeholder('drawings-placeholder.txt', 'assets/passion-projects/drawings/drawings-placeholder.txt')
};

function placeholder(title, asset) {
  return {
    type: 'doc',
    title,
    address: `C:\\Portfolio\\${title}`,
    asset,
    html: `
      <div class="file-preview doc-preview">
        <h2>${title}</h2>
        <p>Placeholder file for this folder.</p>
        <p>Replace <code>${asset}</code> with your own file, or add more items in <code>script.js</code>.</p>
        <a class="xp-action" href="${asset}" download>Download placeholder</a>
      </div>`
  };
}

const template = document.querySelector('#window-template');
const desktop = document.querySelector('.desktop');
const taskbar = document.querySelector('#taskbar-programs');
let zIndex = 20;
const openWindows = new Map();

document.querySelectorAll('[data-open]').forEach(button => {
  button.addEventListener('click', () => {
    clearSelections();
    button.classList.add('selected');
    openItem(button.dataset.open);
  });
});

desktop.addEventListener('click', event => {
  if (event.target === desktop) clearSelections();
});

function clearSelections() {
  document.querySelectorAll('.desktop-icon.selected').forEach(el => el.classList.remove('selected'));
}

function openItem(id) {
  const data = items[id];
  if (!data) return;

  if (openWindows.has(id)) {
    focusWindow(openWindows.get(id).windowEl);
    return;
  }

  const clone = template.content.firstElementChild.cloneNode(true);
  clone.dataset.windowId = id;
  clone.classList.add(`${data.type}-window`);
  clone.style.left = `${150 + openWindows.size * 28}px`;
  clone.style.top = `${62 + openWindows.size * 24}px`;
  clone.querySelector('.window-title span:last-child').textContent = data.title;
  clone.querySelector('.address-bar span').textContent = data.address;
  clone.querySelector('.mini-icon').classList.add(data.type === 'folder' ? 'mini-folder' : data.type === 'image' ? 'mini-image' : 'mini-doc');

  const content = clone.querySelector('.window-content');
  if (data.type === 'folder') {
    content.classList.add('folder-view');
    data.items.forEach(item => content.appendChild(createWindowItem(item)));
  } else {
    content.classList.add('file-view');
    content.innerHTML = data.html;
  }

  clone.querySelector('.close').addEventListener('click', () => closeWindow(id));
  clone.addEventListener('mousedown', () => focusWindow(clone));
  makeDraggable(clone, clone.querySelector('.window-titlebar'));

  desktop.appendChild(clone);
  const taskButton = document.createElement('button');
  taskButton.className = 'taskbar-item';
  taskButton.textContent = data.title;
  taskButton.addEventListener('click', () => focusWindow(clone));
  taskbar.appendChild(taskButton);

  openWindows.set(id, { windowEl: clone, taskButton });
  focusWindow(clone);
}

function closeWindow(id) {
  const entry = openWindows.get(id);
  if (!entry) return;
  entry.windowEl.remove();
  entry.taskButton.remove();
  openWindows.delete(id);
}

function createWindowItem(item) {
  const button = document.createElement('button');
  button.className = `desktop-icon ${item.type === 'folder' ? 'folder' : 'document'}`;
  button.innerHTML = `<span class="icon-art ${item.type === 'folder' ? 'folder-art' : 'doc-art'}"></span><span class="label">${item.label}</span>`;
  button.addEventListener('click', () => {
    document.querySelectorAll('.window-content .desktop-icon.selected').forEach(el => el.classList.remove('selected'));
    button.classList.add('selected');
    openItem(item.id);
  });
  return button;
}

function focusWindow(windowEl) {
  windowEl.style.zIndex = ++zIndex;
}

function makeDraggable(windowEl, handle) {
  let startX = 0, startY = 0, initialLeft = 0, initialTop = 0, dragging = false;
  handle.addEventListener('mousedown', event => {
    if (event.target.closest('.window-controls')) return;
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;
    initialLeft = windowEl.offsetLeft;
    initialTop = windowEl.offsetTop;
    focusWindow(windowEl);
    document.body.style.cursor = 'move';
  });
  window.addEventListener('mousemove', event => {
    if (!dragging) return;
    windowEl.style.left = `${Math.max(0, initialLeft + event.clientX - startX)}px`;
    windowEl.style.top = `${Math.max(0, initialTop + event.clientY - startY)}px`;
  });
  window.addEventListener('mouseup', () => {
    dragging = false;
    document.body.style.cursor = '';
  });
}

function updateClock() {
  const now = new Date();
  document.querySelector('#clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
updateClock();
setInterval(updateClock, 1000);
