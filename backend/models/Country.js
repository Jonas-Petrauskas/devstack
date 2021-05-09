module.exports = (sequelize, Datatypes) => {

  const Country = sequelize.define('Country', {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'countries',
    updatedAt: true,
    createdAt: true
  });

  Country.associate = (model) => {
    Country.hasMany(model.User);
  };

  return Country;
};
