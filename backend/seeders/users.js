'use strict';

const users = require('./users.json');

module.exports = async (db) => {
  const notEmpty = await db.User.findOne({ raw : true });
  if(notEmpty) return;

  users.forEach(async (user) => {
    const newUser = await db.User.create(user);

    const userTechIds = user.technologies.map((tech_id) => ({UserId: newUser.id, TechnologyId: tech_id}))
    await db.sequelize.models.UserTechnologies.bulkCreate(userTechIds);

    const userEligibleCountryIds = user.eligible_countries.map((country_id) => ({UserId: newUser.id, CountryId: country_id}))
    await db.sequelize.models.UserEligibleCountries.bulkCreate(userEligibleCountryIds);
  });
};
