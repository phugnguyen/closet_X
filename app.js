const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const items = require('./routes/api/items');
const outfits = require('./routes/api/outfits');
const closets = require('./routes/api/closets');
const passport = require('passport');

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use('/api/users', users);
app.use('/api/closets', closets);
app.use('/api/outfits', outfits);
app.use('/api/items', items);

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server is running on port ${port}`));