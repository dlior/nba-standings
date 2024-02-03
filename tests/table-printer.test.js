import { jest } from '@jest/globals';

import { tablePrinter } from '../src/table-printer.js';
import { EASTEREN_CONFERENCE, WESTEREN_CONFERENCE } from '../src/constants.js';

describe('tablePrinter', () => {
  beforeEach(() => jest.spyOn(console, 'log').mockImplementation());
  afterEach(jest.restoreAllMocks);

  it('Should print Eastern Conference table', () => {
    tablePrinter([], 'east');
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(EASTEREN_CONFERENCE.title)
    );
  });

  it('Should print Eastern Conference table', () => {
    tablePrinter([], 'west');
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(WESTEREN_CONFERENCE.title)
    );
  });

  it('Should print both Eastern and Western Conference tables when no conference specified', () => {
    tablePrinter([]);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(EASTEREN_CONFERENCE.title)
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(WESTEREN_CONFERENCE.title)
    );
  });
});
