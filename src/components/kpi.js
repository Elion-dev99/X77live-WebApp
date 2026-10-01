export function renderKpi({ label, value, delta, icon, color }) {
  return `<article class="card kpi" style="--glow:${color}"><div class="kpi-label"><span>${icon}</span>${label}</div><div class="kpi-value">${value}</div><div class="delta">${delta}</div></article>`;
}
