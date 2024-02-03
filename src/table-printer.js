import { Table } from 'console-table-printer';

import {
  EASTEREN_CONFERENCE,
  WESTEREN_CONFERENCE,
  NUM_OF_TEAMS,
  TEAMS,
} from './constants.js';

export function tablePrinter(data, conference, teamAbbrivation) {
  const getTeamColor = (team) => {
    if (!teamAbbrivation) {
      return 'white';
    }
    const abbr = teamAbbrivation.toUpperCase();
    return team.includes(TEAMS[abbr]) ? 'green' : 'white';
  };

  const eastrenConference = new Table(EASTEREN_CONFERENCE);
  data.slice(0, NUM_OF_TEAMS / 2).forEach((teamData) => {
    eastrenConference.addRow(teamData, {
      color: getTeamColor(teamData['']),
    });
  });

  const westerenConference = new Table(WESTEREN_CONFERENCE);
  data.slice(NUM_OF_TEAMS / 2).forEach((teamData) => {
    westerenConference.addRow(teamData, {
      color: getTeamColor(teamData['']),
    });
  });

  switch (conference) {
    case 'east':
      eastrenConference.printTable();
      return;
    case 'west':
      westerenConference.printTable();
      return;
    default:
      eastrenConference.printTable();
      westerenConference.printTable();
  }
}
