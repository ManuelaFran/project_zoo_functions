const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((elements) => elements.name === animal).residents
    .every((minAge) => minAge.age >= age);
}

module.exports = getAnimalsOlderThan;
