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

    User.hasMany(model.EmploymentHistory);

    User.belongsTo(model.Country, {
      foreignKey: {
        name: 'country_id',
        allowNull: false,
      },
      onDelete: 'cascade'
    });

    User.belongsTo(model.DeveloperType, {
      foreignKey: {
        name: 'developer_type_id',
        allowNull: false,
      },
      onDelete: 'cascade'
    });

    User.belongsTo(model.ExperienceLevel, {
      foreignKey: {
        name: 'experience_level_id',
        allowNull: false,
      },
      onDelete: 'cascade'
    });

    User.belongsToMany(model.Technology, { as: 'technologies', through: 'UserTechnologies'} );
    User.belongsToMany(model.Country, { as: 'eligible_countries', through: 'UserEligibleCountries'});
  };

  return User;
};
