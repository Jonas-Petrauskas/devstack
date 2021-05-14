'use strict';

const employment_history = require('./employment_history.json');

module.exports = async (db) => {
  const notEmpty = await db.EmploymentHistory.findOne({ raw : true });
  if(notEmpty) return;

  employment_history.forEach(async (data) => {
    const userId = data.userId;
    const history = data.history;
    const user = await db.User.findOne({
      where: { id: userId }
    });
    history.forEach(async (entry) => await user.createEmployment_history(entry));
  })
};
