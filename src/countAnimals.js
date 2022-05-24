const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  }
  const { specie, sex } = animal;
  if (sex) {
    return species.find((specieName) => specieName.name === specie).residents
      .filter(({ sex: sexo }) => sexo === sex).length;
  }
  return species.find((quantSpecies) => quantSpecies.name === specie).residents.length;
}

// { specie: 'giraffes', sex: 'female' }
console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
