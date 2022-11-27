const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((elemento) => elemento.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((elemento) => elemento.managers.includes(managerId))
    .map((element) => `${element.firstName} ${element.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
