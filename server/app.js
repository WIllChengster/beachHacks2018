//server code here
const express    = require('express'),
      app        = express(),
      mysql      = require('mysql'),
      bodyParser = require('body-parser'),
      config     = require('./config.json');


app.use(bodyParser.urlencoded({extended: true}));

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

// GET Routes

app.get('/', (req, res) => {
	res.send('Setup');
});

app.get('/hackathons', (req, res) => {
	res.send('List of Hackathons');
});

app.get('/hackathons/:topicId', (req, res) => {
	res.send('Hackathon ' + req.params.topicId  + ' if it exists');
});

// POST Routes

app.listen(8080, () => console.log('Server started on port 8080...'));