const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const checkManager = employees.some((manager) => manager.managers.includes(id));
  return checkManager;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((idManager) => idManager.managers.includes(managerId))
    .map((idManager) => `${idManager.firstName} ${idManager.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
