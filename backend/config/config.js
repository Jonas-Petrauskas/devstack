require('dotenv').config();

module.exports = {
  development: {
    database: process.env.DB_NAME_DEV,
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    params: {
      host: process.env.DB_HOST_DEV,
      dialect: process.env.DB_DIALECT_DEV,
      logging: false
    }
  },
  production: {
    database: '',
    username: '',
    password: '',
    params: {
      host: '',
      dialect: '',
      logging: false
    }
  },
};
