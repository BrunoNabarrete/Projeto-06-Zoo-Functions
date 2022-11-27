const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const testes = species.find((elemento) => elemento.name === animal).residents;
  return testes.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
