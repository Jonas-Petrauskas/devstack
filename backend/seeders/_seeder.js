'use strict';

const countriesSeeder = require('./countries')
const developerTypesSeeder = require('./developer_types');
const experienceLevelsSeeder = require('./experience_levels')
const technologiesSeeder = require('./technologies');
const usersSeeder = require('./users');

module.exports = async (db) => {
  await countriesSeeder(db);
  await developerTypesSeeder(db);
  await experienceLevelsSeeder(db);
  await technologiesSeeder(db);
  await usersSeeder(db);
}
