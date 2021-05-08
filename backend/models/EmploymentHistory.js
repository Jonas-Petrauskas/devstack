module.exports = (sequelize, Datatypes) => {

  const EmploymentHistory = sequelize.define('EmploymentHistory', {
    company: {
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

  EmploymentHistory.associate = (model) => {
    EmploymentHistory.belongsTo(model.User);
  };

  return EmploymentHistory;
};
