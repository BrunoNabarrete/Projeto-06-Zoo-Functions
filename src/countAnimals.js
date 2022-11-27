const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const numberOfResidents = {};
    species.forEach((element) => {
      numberOfResidents[element.name] = element.residents.length;
    });
    return numberOfResidents;
  }
  if (animal.sex !== undefined) {
    return species
      .find((elemento) => elemento.name === animal.specie)
      .residents.filter((e) => e.sex === animal.sex)
      .length;
  }
  return species.find((element) => element.name === animal.specie).residents.length;
}

module.exports = countAnimals;
