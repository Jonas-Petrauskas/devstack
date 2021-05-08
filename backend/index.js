require('dotenv').config();

const express = require('express');
const cors = require('cors');

// * ROUTERS
const privateRouter = require('./routes/private-router');
const publicRouter = require('./routes/public-router');

// * SERVER INSTANCE
const app = express();

const corsConfig = {
  origin: process.env.CLIENT_HOST,
  credentials: true,
}
app.use(cors(corsConfig));
app.use(express.json());

app.use(publicRouter);
// app.use(authentication); // TODO
app.use(privateRouter);

// * ENVIRONMENT
const { env } = process;
const port = env.SERVER_PORT || 3000;
const host = env.SERVER_HOST || 'localhost';

// * DATABASE
const db = require('./models/_index');

(async () => {
  await db.sequelize.sync();

  // * DATABASE SEEDERS
  await require('./seeders/technologies')(db);
  await require('./seeders/experience_levels')(db);
  await require('./seeders/developer_types')(db);

  app.listen(port, () => {
    console.log(`Server listening on: http://${host}:${port}/`);
  });
})();