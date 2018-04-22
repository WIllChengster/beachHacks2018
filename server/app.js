//server code here
const express    = require('express'),
      app        = express(),
      mysql      = require('mysql'),
      bodyParser = require('body-parser'),
      passport   = require('passport'),
      config     = require('./config.json');
const { resolve } = require('path');
const PORT = process.env.PORT || 8080;


app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  savedUnitialized: true
}));

const authenticateRoute = require('./routes/authenticateRoute'),
      hackathonRoutes   = require('./routes/hackathonRoutes'),
      profileRoute      = require('./routes/profileRoute');

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
      });
        

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
	res.redirect('/home');
});

app.use(express.static(resolve(__dirname, '..', 'dist')));
app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => console.log('Server started on port'+PORT));