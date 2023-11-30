import { load } from '../../storage/load.mjs';

export const timeSinceSave = currentDate => {
  const minutes = 5;
  const savedDate = load('date');

  const elapsedMinutes = (currentDate - savedDate) / (1000 * 60);
  return elapsedMinutes >= minutes;
};
