import * as cheerio from 'cheerio';
import { BASE_URL, NUM_OF_COLUMNS } from '../constants/constants.js';
import { tablePrinter } from './table-printer.js';

export async function getNBAStandings(season, conference, team) {
  const standingsData = [];

  const response = await fetch(`${BASE_URL}/${season}`);
  const html = await response.text();
  const $ = cheerio.load(html);

  let i = 0;
  $('.Table__Scroller table').each((_, table) => {
    $(table)
      .find('tbody tr')
      .each((j, row) => {
        const index = Math.floor(i / NUM_OF_COLUMNS);
        const teamData = {};
        const team = $('.hide-mobile').find('a').eq(index).text();
        teamData[''] = ` ${j + 1} ${team}`;

        $(row)
          .find('td')
          .each((k, cell) => {
            const col = $(table).find('thead tr th').eq(k).text();
            teamData[col] = $(cell).text();
            i++;
          });

        standingsData.push(teamData);
      });
  });

  tablePrinter(standingsData, conference, team);
}
