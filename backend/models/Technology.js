module.exports = (sequelize, Datatypes) => {

  const Technology = sequelize.define('Technology', {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'technologies',
    updatedAt: true,
    createdAt: true
  });

  Technology.associate = (model) => {
    Technology.belongsToMany(model.User, { through: 'UserTechnologies' });
  };

  return Technology;
};