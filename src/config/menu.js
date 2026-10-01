// メニュー追加は、この配列へ1項目追加し、index.js の routes に画面を登録します。
export const menuItems = Object.freeze([
  { id: 'overview', label: '概要', icon: '◆' },
  { id: 'monitor', label: 'ライブ監視', icon: '◉' },
  { id: 'history', label: '稼働履歴', icon: '◷' },
  { id: 'analytics', label: '分析', icon: '⌁' },
  { id: 'alerts', label: '通知', icon: '♢' },
  { id: 'settings', label: '設定', icon: '⚙' },
]);
