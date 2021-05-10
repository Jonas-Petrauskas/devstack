'use strict';

const db = require('../models/_index');

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

const postUser = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.status(201).json(users);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getUsers,
  postUser,
}
