export const NUM_OF_COLUMNS = 13;
export const NUM_OF_TEAMS = 30;
export const BASE_URL = 'https://www.espn.com/nba/standings/_/season';
const COLUMNS = [
  '',
  'W',
  'L',
  'PCT',
  'GB',
  'HOME',
  'AWAY',
  'DIV',
  'CONF',
  'PPG',
  'OPP PPG',
  'DIFF',
  'STRK',
  'L10',
].map((col, i) => ({
  name: col,
  alignment: i === 0 ? 'left' : 'center',
}));
export const EASTEREN_CONFERENCE = {
  title: 'Eastern Conference',
  columns: COLUMNS,
};
export const WESTEREN_CONFERENCE = {
  title: 'Western Conference',
  columns: COLUMNS,
};
export const TEAMS = {
  ATL: 'Atlanta Hawks',
  BOS: 'Boston Celtics',
  BKN: 'Brooklyn Nets',
  CHA: 'Charlotte Hornets',
  CHI: 'Chicago Bulls',
  CLE: 'Cleveland Cavaliers',
  DAL: 'Dallas Mavericks',
  DEN: 'Denver Nuggets',
  DET: 'Detroit Pistons',
  GSW: 'Golden State Warriors',
  HOU: 'Houston Rockets',
  IND: 'Indiana Pacers',
  LAC: 'LA Clippers',
  LAL: 'Los Angeles Lakers',
  MEM: 'Memphis Grizzlies',
  MIA: 'Miami Heat',
  MIL: 'Milwaukee Bucks',
  MIN: 'Minnesota Timberwolves',
  NOP: 'New Orleans Pelicans',
  NYK: 'New York Knicks',
  OKC: 'Oklahoma City Thunder',
  ORL: 'Orlando Magic',
  PHI: 'Philadelphia 76ers',
  PHX: 'Phoenix Suns',
  POR: 'Portland Trail Blazers',
  SAC: 'Sacramento Kings',
  SAS: 'San Antonio Spurs',
  TOR: 'Toronto Raptors',
  UTA: 'Utah Jazz',
  WAS: 'Washington Wizards',
};
