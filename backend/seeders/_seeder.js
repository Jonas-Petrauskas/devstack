'use strict';

const developerTypesSeeder = require('./developer_types');
const experienceLevelsSeeder = require('./experience_levels')
const technologiesSeeder = require('./technologies');

module.exports = async (db) => {
  await developerTypesSeeder(db);
  await experienceLevelsSeeder(db);
  await technologiesSeeder(db);
}
