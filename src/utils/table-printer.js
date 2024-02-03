import {
  EASTEREN_CONFERENCE,
  WESTEREN_CONFERENCE,
  NUM_OF_TEAMS,
  TEAMS,
} from '../constants/constants.js';
import { Table } from 'console-table-printer';

export function tablePrinter(data, conference, team) {
  const eastrenConference = new Table(EASTEREN_CONFERENCE);
  data.slice(0, NUM_OF_TEAMS / 2).forEach((teamData) => {
    eastrenConference.addRow(teamData);
  });

  const westerenConference = new Table(WESTEREN_CONFERENCE);
  data.slice(NUM_OF_TEAMS / 2).forEach((teamData) => {
    westerenConference.addRow(teamData);
  });

  if (conference === 'east') {
    eastrenConference.printTable();
    return;
  }

  if (conference === 'west') {
    westerenConference.printTable();
    return;
  }

  eastrenConference.printTable();
  westerenConference.printTable();
}
