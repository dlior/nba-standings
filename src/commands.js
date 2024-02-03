import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getNBAStandings } from './utils/nba-standings.js';

yargs(hideBin(process.argv))
  .command(
    '*',
    '',
    () => {},
    (argv) => {
      const { season, conference, team } = argv;
      getNBAStandings(season, conference, team);
    }
  )
  .option('season', {
    alias: 's',
    describe: 'Specify the season year',
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
