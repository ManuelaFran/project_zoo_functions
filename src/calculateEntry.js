const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, { age }) => {
    if (age < 18) acc.child += 1;
    if (age >= 18 && age < 50) acc.adult += 1;
    if (age >= 50) acc.senior += 1;
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) return 0;
  const { adult: adulto, child: criança, senior: senhor } = countEntrants(entrants);
  const { adult, senior, child } = prices;
  return adulto * adult + criança * child + senhor * senior;
}

module.exports = { calculateEntry, countEntrants };
