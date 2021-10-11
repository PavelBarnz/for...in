// eslint-disable-next-line import/extensions
import sortByProp from './js/script.js';

const swordsman = {
  level: 2,
  defence: 40,
  name: 'мечник',
  health: 10,
  attack: 80,
};

const res = sortByProp(swordsman, ['name', 'health', 'level']);

console.log(res);
