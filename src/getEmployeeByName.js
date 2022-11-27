const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((nom) => nom.firstName === employeeName || nom.lastName === employeeName);
}

module.exports = getEmployeeByName;
