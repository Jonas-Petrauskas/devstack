'use strict';

const db = require('../models/_index');

const getCompanies = async (req, res) => {
  try {
    const companies = await db.Company.findAOne();
    res.status(200).json(companies);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getCompanies,
}
