import { menuItems } from './src/config/menu.js';
import { state, refreshData } from './src/data/store.js';
import { renderSidebar } from './src/components/sidebar.js';
import { renderHeader } from './src/components/header.js';
import { renderOverview } from './src/features/overview/overview.js';
import { renderPlaceholder } from './src/features/shared/placeholder.js';

const routes = new Map([
  ['overview', renderOverview],
  ['monitor', () => renderPlaceholder('ライブ監視', '最新の取得結果を自動更新する画面です。', '◉')],
  ['history', () => renderPlaceholder('稼働履歴', '日付ごとの状態変化を確認できます。', '◷')],
  ['analytics', () => renderPlaceholder('分析', '期間別の稼働率や変更傾向を表示します。', '⌁')],
  ['alerts', () => renderPlaceholder('通知', '検知条件と通知先を管理します。', '♢')],
  ['settings', () => renderPlaceholder('設定', '監視対象、更新間隔、表示項目を管理します。', '⚙')],
]);

let activeRoute = location.hash.replace('#/', '') || 'overview';
const sidebar = document.querySelector('#sidebar');
const header = document.querySelector('#header');
const page = document.querySelector('#page');

function navigate(route) {
  activeRoute = routes.has(route) ? route : 'overview';
  history.replaceState(null, '', `#/${activeRoute}`);
  render();
  page.focus({ preventScroll: true });
  sidebar.classList.remove('open');
}

function render() {
  sidebar.innerHTML = renderSidebar(menuItems, activeRoute);
  header.innerHTML = renderHeader(state.lastUpdated);
  const pageRenderer = routes.get(activeRoute) ?? routes.get('overview');
  page.innerHTML = pageRenderer(state);
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-route]').forEach((button) => {
    button.addEventListener('click', () => navigate(button.dataset.route));
  });
  document.querySelector('#menu-toggle')?.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.querySelector('#refresh-button')?.addEventListener('click', async () => {
    const button = document.querySelector('#refresh-button');
    button.disabled = true;
    try {
      await refreshData();
      showToast('監視データを更新しました');
      render();
    } catch (error) {
      console.error(error);
      showToast('更新に失敗しました');
    } finally {
      button.disabled = false;
    }
  });
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

window.addEventListener('hashchange', () => navigate(location.hash.replace('#/', '')));
render();
