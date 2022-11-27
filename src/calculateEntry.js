const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((e) => {
    if (e.age < 18) {
      obj.child += 1;
    }
    if (e.age >= 18 && e.age < 50) {
      obj.adult += 1;
    }
    if (e.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const calculate = countEntrants(entrants);
  let sum = 0;
  sum += (calculate.child * prices.child) + (calculate.adult * prices.adult)
  + (calculate.senior * prices.senior);
  return sum;
}
module.exports = { calculateEntry, countEntrants };
