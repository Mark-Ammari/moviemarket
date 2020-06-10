const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const PORT = process.env.PORT || 8080;

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }))
server.set('trust proxy', 1) // trust first proxy
server.use(session({
  secret: process.env.NODE_ENV === "production" ? process.env.SESSION_SECRET : 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection }),
  cookie: {
    secure: process.env.NODE_ENV === "production" ? true : false,
    sameSite: "none",
    maxAge: 1000 * 24 * 24 * 60,
  }
}))

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

mongoose.connect(config.get("mongo_db_key") || process.env.MONGODB_URI,
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