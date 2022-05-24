const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const people = employees.find((person) =>
    person.firstName === employeeName || person.lastName === employeeName);
  return people;
}

module.exports = getEmployeeByName;
