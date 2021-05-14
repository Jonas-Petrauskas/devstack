module.exports = (sequelize, Datatypes) => {

  const EducationHistory = sequelize.define('EducationHistory', {
    institution: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    country: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    description: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'employment_histories',
    updatedAt: true,
    createdAt: true
  });

  EducationHistory.associate = (model) => {
    EducationHistory.belongsTo(model.Country);
    EducationHistory.belongsTo(model.User);
  };

  return EducationHistory;
};
