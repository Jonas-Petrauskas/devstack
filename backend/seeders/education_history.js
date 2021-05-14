'use strict';

const education_history = require('./education_history.json');

module.exports = async (db) => {
  const notEmpty = await db.EducationHistory.findOne({ raw : true });
  if(notEmpty) return;

  education_history.forEach(async (data) => {
    const userId = data.userId;
    const history = data.history;
    const user = await db.User.findOne({
      where: { id: userId }
    });
    history.forEach(async (entry) => await user.createEducation_history(entry));
  })
};
