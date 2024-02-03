import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { getNBAStandings } from './scraper.js';

yargs(hideBin(process.argv))
  .command('*', false, {}, (argv) => {
    const { season, conference, team } = argv;
    getNBAStandings(season, conference, team);
  })
  .option('season', {
    alias: 's',
    describe: 'Specify the NBA season',
    type: 'number',
    default: new Date().getFullYear(),
  })
  .option('conference', {
    alias: 'c',
    describe: 'Specify the conference (east or west)',
    type: 'string',
  })
  .option('team', {
    alias: 't',
    describe: 'Specify the team abbreviation',
    type: 'string',
  })
  .parse();
