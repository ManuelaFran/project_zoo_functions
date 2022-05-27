const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = employees.find((responsible) => responsible.id === id).responsibleFor[0];
  return Object.values(species.find((specie) => specie.id === person).residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr)));
}

module.exports = getOldestFromFirstSpecies;
