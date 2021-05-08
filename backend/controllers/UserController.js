'use strict';

const db = require('../models/_index');

const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
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
