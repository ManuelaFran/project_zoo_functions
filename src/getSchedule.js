const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { hours } = data;

function createObject(object) {
  const { open, close } = hours[object];
  const hour = `Open from ${open}am until ${close}pm`;
  const availability = species.filter((element) => element.availability
    .includes(object)).map((animal) => animal.name);
  const object2 = {};
  if (object !== 'Monday') {
    object2[object] = { officeHour: hour, exhibition: availability };
    return object2;
  }
  return {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
}

function getSchedule(scheduleTarget) {
  const animal2 = species.some(({ name }) => name === scheduleTarget);
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return createObject(scheduleTarget);
  }
  if (!scheduleTarget || !animal2) {
    return Object.keys(hours)
      .reduce((acc, elements) => ({ ...acc, ...createObject(elements) }), {});
  }
  return species.find((names) => names.name === scheduleTarget).availability;
}

module.exports = getSchedule;
