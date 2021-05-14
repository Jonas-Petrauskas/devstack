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
    linkedin: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    github: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    bio: {
      type: Datatypes.TEXT,
      allowNull: true,
    },
    photo_path: {
      type: Datatypes.STRING,
      allowNull: true,
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
    User.hasMany(model.EducationHistory);

    User.belongsTo(model.Country, {
      foreignKey: {
        name: 'country_id',
        allowNull: false,
      },
      as: 'country',
      onDelete: 'cascade'
    });

    User.belongsTo(model.DeveloperType, {
      foreignKey: {
        name: 'developer_type_id',
        allowNull: false,
      },
      as: 'developer_type',
      onDelete: 'cascade'
    });

    User.belongsTo(model.ExperienceLevel, {
      foreignKey: {
        name: 'experience_level_id',
        allowNull: false,
      },
      as: 'experience_level',
      onDelete: 'cascade'
    });

    User.belongsToMany(model.Technology, { as: 'technologies', through: 'UserTechnologies'} );
    User.belongsToMany(model.Country, { as: 'eligible_countries', through: 'UserEligibleCountries'});
  };

  return User;
};
