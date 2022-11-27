const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getSpeciesByUndefined = () => {
  const arr = [];
  for (let index = 0; index < employees.length; index += 1) {
    const test = employees.map((animal) => animal.responsibleFor)[index];
    arr.push({
      id: employees[index].id,
      fullName: employees.map((name) => `${name.firstName} ${name.lastName}`)[index],
      species: test.map((element) => species.find((animal) => animal.id === element).name),
      locations: test.map((element) => species.find((animal) => animal.id === element).location),
    });
  }
  return arr;
};

const getSpecies = (employer) => {
  if (employees.find((element) => element.id === employer.id
  || element.firstName === employer.name
  || element.lastName === employer.name) === undefined) {
    throw new Error('Informações inválidas');
  }
  const employerFind = employees.find((element) => element.firstName === employer.name
|| element.lastName === employer.name
|| element.id === employer.id);
  const petFind = species.filter((pet) => employerFind.responsibleFor.includes(pet.id));
  const expectedOne = {
    id: employerFind.id,
    fullName: `${employerFind.firstName} ${employerFind.lastName}`,
    species: petFind.map((name) => name.name),
    locations: petFind.map((location) => location.location),
  };
  return expectedOne;
};

function getEmployeesCoverage(objeto) {
  if (objeto === undefined) {
    return getSpeciesByUndefined();
  }
  if (objeto !== undefined) {
    return getSpecies(objeto);
  }
}

module.exports = getEmployeesCoverage;
