module.exports = (sequelize, Datatypes) => {

  const User = sequelize.define('User', {
    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
    first_name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    min_salary: {
      type: Datatypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'users',
    updatedAt: true,
    createdAt: true
  });

  User.associate = (model) => {
    User.hasOne(model.UserCredentials);

    User.hasMany(model.Technology);
    User.hasMany(model.EmploymentHistory);

    User.belongsTo(model.Country);
    User.belongsTo(model.DeveloperType);
    User.belongsTo(model.ExperienceLevel);

    User.belongsToMany(model.Country, { through: 'UserEligibleCountries' });
  };

  return User;
};
