'use strict';

const companiesSeeder = require('./companies');
const countriesSeeder = require('./countries');
const developerTypesSeeder = require('./developer_types');
const experienceLevelsSeeder = require('./experience_levels');
const technologiesSeeder = require('./technologies');
const usersSeeder = require('./users');

const educationHistorySeeder = require('./education_history');
const employmentHistorySeeder = require('./employment_history');

module.exports = async (db) => {
  await companiesSeeder(db);
  await countriesSeeder(db);
  await developerTypesSeeder(db);
  await experienceLevelsSeeder(db);
  await technologiesSeeder(db);
  await usersSeeder(db);

  await educationHistorySeeder(db);
  await employmentHistorySeeder(db);
}
