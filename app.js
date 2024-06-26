const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');
const apiRouter = require('./routes/apiRouter');
const cookieParser = require("cookie-parser");
const pagesRouter = require('./routes/pages');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  express.static(path.join(__dirname, 'public')),
  apiRouter
);

app.listen(PORT); 