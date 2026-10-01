function points(values, width = 800, height = 260, padding = 18) {
  const min = Math.min(...values) - 4; const max = Math.max(...values) + 4;
  return values.map((value, index) => {
    const x = padding + index * ((width - padding * 2) / (values.length - 1));
    const y = height - padding - ((value - min) / (max - min)) * (height - padding * 2);
    return [x, y];
  });
}
export function renderActivityChart(values) {
  const coordinates = points(values); const line = coordinates.map(([x,y]) => `${x},${y}`).join(' ');
  const area = `18,260 ${line} 782,260`;
  const grids = [50,100,150,200,250].map(y => `<line class="chart-grid" x1="18" y1="${y}" x2="782" y2="${y}"/>`).join('');
  return `<svg class="chart" viewBox="0 0 800 275" role="img" aria-label="過去24時間の稼働推移">
    <defs><linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#27d99a" stop-opacity=".28"/><stop offset="1" stop-color="#27d99a" stop-opacity="0"/></linearGradient></defs>
    ${grids}<polygon class="chart-fill" points="${area}"/><polyline class="chart-line" points="${line}"/>
    <circle class="chart-point" cx="${coordinates.at(-1)[0]}" cy="${coordinates.at(-1)[1]}" r="5"/>
    <g fill="#717b91" font-size="11"><text x="18" y="273">00:00</text><text x="260" y="273">08:00</text><text x="510" y="273">16:00</text><text x="748" y="273">24:00</text></g>
  </svg>`;
}
