module.exports = (sequelize, Datatypes) => {

  const EmploymentHistory = sequelize.define('EmploymentHistory', {
    company: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    title: {
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
    tableName: 'employment_history',
    updatedAt: true,
    createdAt: true
  });

  EmploymentHistory.associate = (model) => {
    EmploymentHistory.belongsTo(model.Country, {
      foreignKey: {
        name: 'country_id',
        allowNull: false,
      },
      as: 'country',
      onDelete: 'cascade'
    });
    EmploymentHistory.belongsTo(model.User, {
      foreignKey: {
        name: 'user_id',
        allowNull: false,
      },
      as: 'user',
      onDelete: 'cascade'
    });
  };

  return EmploymentHistory;
};
