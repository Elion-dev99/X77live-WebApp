export function renderHeader(lastUpdated) {
  return `<button id="menu-toggle" class="btn menu-toggle" type="button" aria-label="メニューを開く">☰</button>
    <div class="topbar-title">最終更新 ${lastUpdated}</div>
    <div class="topbar-actions"><span class="status-badge hide-mobile"><span class="dot"></span> Live</span>
      <button id="refresh-button" class="btn btn-primary" type="button">データを更新</button></div>`;
}
