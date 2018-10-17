const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here

app.use(routes);


// Connect to the Mongo DB
// config.db_dev || added this to try to get sign-in and signup to work
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tattooinfo');

// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
