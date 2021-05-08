require('dotenv').config();

module.exports = {
  dev: {
    database: process.env.DB_NAME_DEV,
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    params: {
      host: 'localhost',
      dialect: 'postgres',
      logging: false
    }
  },
};
