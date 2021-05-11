'use strict';

const db = require('../models/_index');

const processUserQueryParams = require('../functions/user-query-params-getter');

const getUsers = async (req, res) => {
  try {
    let users = await db.User.findAll({
      include: [
        {
          model: db.Country,
          as: 'country'
        },
        {
          model: db.ExperienceLevel,
          as: 'experience_level'
        },
        {
          model: db.DeveloperType,
          as: 'developer_type'
        },
        {
          model: db.Technology,
          through: 'UserTechnologies',
          as: 'technologies'
        },
        {
          model: db.Country,
          through: 'UserEligibleCountries',
          as: 'eligible_countries'
        }
      ]
    });

    users = users.map(user => user.toJSON());

    res.status(200).json(users);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

const getFilteredUsers = async (req, res) => {
  try {
    const { query } = req.params;
    const queries = processUserQueryParams(query);

    const where = {}

    if (queries.experience_level) where.experience_level_id = queries.experience_level;
    if (queries.developer_type) where.developer_type_id = queries.developer_type;

    let users = await db.User.findAll({
      where: where,
      include: [
        {
          model: db.Country,
          as: 'country'
        },
        {
          model: db.ExperienceLevel,
          as: 'experience_level'
        },
        {
          model: db.DeveloperType,
          as: 'developer_type'
        },
        {
          model: db.Technology,
          through: 'UserTechnologies',
          as: 'technologies'
        },
        {
          model: db.Country,
          through: 'UserEligibleCountries',
          as: 'eligible_countries'
        }
      ]
    });

    // TODO: FIX THIS TO BE DONE ON THE QUERY ABOVE
    if (queries.technologies && Number.isInteger(queries.technologies[0])) {
      users = users.filter((user) => {
        const userTechIds = user.technologies.map(tech => tech.dataValues.id);

        for (let i = 0; i < queries.technologies.length; ++i) {
          if (!userTechIds.includes(queries.technologies[i])) return false;
        }

        return true;
      });
    }
    // TODO ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    res.status(200).json(users);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

const postUser = async (req, res) => {
  try { // TODO !
    const users = await db.User.findAll();
    res.status(201).json(users);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getUsers,
  getFilteredUsers,
  postUser,
}
