const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const employerId = employees.find((nom) => nom.id === id).responsibleFor[0];
  const pet = species.find((e) => e.id === employerId).residents;
  const firstAnimal = pet.map((e) => e);
  firstAnimal.sort((obj1, obj2) => obj2.age - obj1.age);
  const oldestAnimal = [firstAnimal[0].name, firstAnimal[0].sex, firstAnimal[0].age];
  return oldestAnimal;
}

module.exports = getOldestFromFirstSpecies;
