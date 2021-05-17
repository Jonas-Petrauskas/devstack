require('dotenv').config();

const express = require('express');
const http = require('http');
const cors = require('cors');

// * ROUTERS
const privateRouter = require('./routes/private-router');
const publicRouter = require('./routes/public-router');

// * SERVER INSTANCE
const app = express();
const server = http.createServer(app);

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
  await db.sequelize.sync({force: true});

  // * DATABASE SEEDER
  await require('./seeders/_seeder')(db);

  // * SOCKET IO
  const options = {
    cors: {
      "origin": "*",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204
    }
  };
  const io = require('socket.io')(server, options);
  const setupSocketIO = require('./socket-io/socket-io');
  setupSocketIO(io, db);

  server.listen(port, () => {
    console.log(`Server listening on: http://${host}:${port}/`);
  });
})();
