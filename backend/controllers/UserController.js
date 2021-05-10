'use strict';

const db = require('../models/_index');

const getUsers = async (req, res) => {
  try {
    let users = await db.User.findAll({
      include: [
        {
          model: db.Technology,
          attributes: ["id"],
          through: 'UserTechnologies',
          as: 'technologies'
        },
        {
          model: db.Country,
          attributes: ["id"],
          through: 'UserEligibleCountries',
          as: 'eligible_countries'
        }
      ]
    });

    users = users.map((user) => {
      user = user.toJSON();
      const technologies = user.technologies.map((tech) => tech.id);
      const eligible_countries = user.eligible_countries.map((country) => country.id);
      return {...user, technologies, eligible_countries};
    });

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
