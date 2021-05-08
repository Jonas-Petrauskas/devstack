module.exports = (sequelize, Datatypes) => {

  const DeveloperType = sequelize.define('DeveloperType', {
    type: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'developer_types',
    updatedAt: true,
    createdAt: true
  });

  DeveloperType.associate = (model) => {
    DeveloperType.hasMany(model.User);
  };

  return DeveloperType;
};
