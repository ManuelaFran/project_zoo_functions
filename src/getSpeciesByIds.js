const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const returnSpecies = species.filter(({ id }) => ids.includes(id));
  return returnSpecies;
}

module.exports = getSpeciesByIds;
