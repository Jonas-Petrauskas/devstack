module.exports = (sequelize, Datatypes) => {

  const EducationHistory = sequelize.define('EducationHistory', {
    institution: {
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
    tableName: 'education_history',
    updatedAt: true,
    createdAt: true
  });

  EducationHistory.associate = (model) => {
    EducationHistory.belongsTo(model.Country, {
      foreignKey: {
        name: 'country_id',
        allowNull: false,
      },
      as: 'country',
      onDelete: 'cascade'
    });
    EducationHistory.belongsTo(model.User, {
      foreignKey: {
        name: 'user_id',
        allowNull: false,
      },
      as: 'user',
      onDelete: 'cascade'
    });
  };

  return EducationHistory;
};
