const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const server = express();

server.use(express.json());

const trending = require('./routes/API/movie_API/trending');
const movie = require('./routes/API/movie_API/movie');
const tv = require('./routes/API/movie_API/tv');
const models = require('./routes/API/user_API/models');
const auth = require('./routes/API/auth');


server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "POST, GET, HEAD, DELETE, PUT, OPTIONS")
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

const config = require('config')

mongoose.connect(process.env.MONGODB_URI || config.get("mongo_db_key"),
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

server.use('/', trending);
server.use('/movie', movie);
server.use('/tv', tv);
server.use('/user', models);
server.use('/account', auth);

// production
if (process.env.NODE_ENV === 'production') {
  server.use(express.static('frontend-movie-app/build'));
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend-movie-app', 'build', 'index.html'));
  });
}

server.listen(PORT, () => console.log(`listening on port: ${PORT}`));
// RCs2hQNwrOl2KbcB
// mongodb+srv://mark:RCs2hQNwrOl2KbcB@cluster0-vnw5h.mongodb.net/test?retryWrites=true&w=majority

// mongodb+srv://mark:RCs2hQNwrOl2KbcB@cluster0-vnw5h.mongodb.net/test

