const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.some((string) => string === element.id));
}

module.exports = getSpeciesByIds;
