export function renderSidebar(items, activeId) {
  const nav = items.map(({ id, label, icon }) => `
    <button class="nav-button ${id === activeId ? 'active' : ''}" data-route="${id}" type="button">
      <span class="nav-icon" aria-hidden="true">${icon}</span><span>${label}</span>
    </button>`).join('');
  return `<div class="brand"><span class="brand-mark">X</span><span>X77Live<small>Monitor</small></span></div>
    <nav class="nav">${nav}</nav>
    <div class="sidebar-footer"><strong><span class="dot"></span> System Status</strong>正常に稼働しています</div>`;
}
