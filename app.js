const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

// app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ err });
});

module.exports = app;
