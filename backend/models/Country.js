module.exports = (sequelize, Datatypes) => {

  const Country = sequelize.define('Country', {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
    is_european_union: {
      type: Datatypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    tableName: 'countries',
    updatedAt: true,
    createdAt: true
  });

  Country.associate = (model) => {
  };

  return Country;
};
