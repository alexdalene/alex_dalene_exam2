import { load } from '../../storage/load.js';

/**
 * Calculates the time elapsed since the last save.
 * @param {Date} currentDate - The current date and time.
 * @returns {boolean} - True if the elapsed time is greater than or equal to 5 minutes, false otherwise.
 */
export const timeSinceSave = currentDate => {
  const minutes = 5;
  const savedDate = load('date');

  const elapsedMinutes = (currentDate - savedDate) / (1000 * 60);
  return elapsedMinutes >= minutes;
};
