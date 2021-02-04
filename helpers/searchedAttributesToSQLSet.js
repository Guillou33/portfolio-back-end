const omitBy = require('lodash/omitBy');

const searchedAttributesToSqlSet = (attributes) =>
  Object.keys(omitBy(attributes, (item) => typeof item === 'undefined'))
    .map((k) => `${k} = :${k}`)
    .join(' AND ');

module.exports = searchedAttributesToSqlSet;
