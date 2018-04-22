//server code here
const express        = require('express'),
      app            = express(),
      mysql          = require('mysql'),
      bodyParser     = require('body-parser'),
      config         = require('./config.json');

const authenticateRoute = require('./routes/authenticateRoute'),
      hackathonRoutes   = require('./routes/hackathonRoutes'),
      profileRoute      = require('./routes/profileRoute');

app.use(bodyParser.urlencoded({extended: true}));
app.use(hackathonRoutes);
app.use(authenticateRoute);
app.use(profileRoute);

const con = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
  database: config.database
});

con.connect((err) => {
  if(err) {
    console.log(err);
    return
  }
  else {
    console.log('Connected to MySQL!');
  }
});

app.get('/', (req, res) => {
	res.send('Landing Page');
});

app.listen(8080, () => console.log('Server started on port 8080...'));