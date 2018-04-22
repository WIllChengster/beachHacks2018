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
    con.query('CREATE TABLE teamless (topicId INT, userId INT)');
  }
});

// GET Routes

app.get('/', (req, res) => {
	res.send('Landing Page');
});

app.get('/hackathons', (req, res) => {
  con.query('SELECT * FROM topics', (err, results, fields) => {
    if(err) {
      throw err;
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/hackathons/new', (req, res) => {
  res.send()
});

app.get('/hackathons/:topicId', (req, res) => {
  con.query('SELECT * FROM topics WHERE topicId = ?', [req.params.topicId], (err, results, fields) => {
    if(err) {
      throw err;
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/hackathons/:topicId/find-teammates', (req, res) => {
  con.query('SELECT * FROM users' + 
    ' INNER JOIN users ON teamless.userId = users.userId' + 
    ' AND teamless.topicId = ?', [req.params.topicId], (err, results, fields) => {
    if(err) {
      throw err;
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/profile/:username', (req,res)=> {
  con.query('SELECT * FROM users WHERE username = ?' [req.params.username], (err, results, fields) => {
    if(err) {
      throw err;
    }
    res.send(JSON.stringify(results));
  });
});


// POST Routes

app.post('/hackathons', (req, res) => {
  // let title = req.body.;
  // let description = req.body.;
  // let dateStart = req.body.;
  // let dateEnd = req.body.;
  // let progress = req.body.;

  // newHackathon = {
  //   title: title,
  //   description: description,
  //   dateStart: dateStart,
  //   dateEnd: dateEnd,
  //   progress: progress
  // };

  con.query('INSERT INTO topics SET ?', newHackathon, (err, results, fields) => {
    if(err) {
      throw err;
    }
    console.log('Created new Hackathon post.');
  })
});

app.listen(8080, () => console.log('Server started on port 8080...'));