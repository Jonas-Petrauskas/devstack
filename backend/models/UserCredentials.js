module.exports = (sequelize, Datatypes) => {

  const UserCredentials = sequelize.define('UserCredentials', {
    // * TO BE HASHED WITH BCRYPT
    username: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
    // * TO BE HASHED WITH BCRYPT
    password: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'user_credentials',
    updatedAt: true,
    createdAt: true
  });

  UserCredentials.associate = (model) => {
    UserCredentials.belongsTo(model.User);
  };

  return UserCredentials;
};
