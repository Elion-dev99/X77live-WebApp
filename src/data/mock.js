export const mockDashboard = {
  store: { name: '大阪店', status: 'オンライン', recruiting: true, applicants: 5, waitingMinutes: 15 },
  uptime: 84, changes: 12, responseSeconds: 1.2,
  activity: [72,74,73,77,80,81,78,83,87,88,86,91,90,93,91,95,94,96],
  events: [
    { time:'21:11', type:'募集人数', detail:'3人 → 5人', level:'normal' },
    { time:'20:44', type:'募集停止', detail:'募集中 → 停止中', level:'danger' },
    { time:'20:12', type:'募集再開', detail:'停止中 → 募集中', level:'normal' },
    { time:'19:55', type:'募集停止', detail:'募集中 → 停止中', level:'danger' },
    { time:'17:21', type:'待機時間', detail:'30分 → 15分', level:'normal' },
  ],
  lastUpdated: '21:15:32'
};
