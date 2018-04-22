//server code here
const express    = require('express'),
      app        = express(),
      mysql      = require('mysql'),
      bodyParser = require('body-parser'),
      passport   = require('passport'),
      config     = require('./config.json');

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  savedUnitialized: true
}));

const authenticateRoute = require('./routes/authenticateRoute'),
      hackathonRoutes   = require('./routes/hackathonRoutes'),
      profileRoute      = require('./routes/profileRoute');

app.use(bodyParser.urlencoded({extended: true}));

// GitHub Auth
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(hackathonRoutes);
app.use(profileRoute);
app.use(authenticateRoute);

app.get('/', (req, res) => {
	res.send('Landing Page');
});

app.listen(8080, () => console.log('Server started on port 8080...'));