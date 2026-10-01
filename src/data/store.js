import { mockDashboard } from './mock.js';
export const state = structuredClone(mockDashboard);

// 実API接続時は、この関数内を fetch('/api/status') に置き換えます。
export async function refreshData() {
  await new Promise((resolve) => setTimeout(resolve, 350));
  state.lastUpdated = new Date().toLocaleTimeString('ja-JP', { hour12: false });
}
