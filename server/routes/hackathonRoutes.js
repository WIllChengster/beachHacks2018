const router = require('express').Router(),
      mysql  = require('mysql'),
      config = require('../config.json')

const con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

router.get('/hackathons', (req, res) => {
  con.query('SELECT * FROM topics', (err, results, fields) => {
    if(err) {
      throw err;
    }
    res.send(JSON.stringify(results));
  });
});

router.post('/hackathons/new', (req, res) => {
  let hackathon = {
    description: req.body.description,
    progress: 'In-Progress',
    coverArtUrl: 'https://google.com',
  }

  con.query('INSERT INTO topics SET ?', hackathon, (err, res, fields) => {
    if(err) {
      throw err;
    }
    console.log('Created a new Hackathon!');
  });
});

router.get('/hackathons/:topicId', (req, res) => {
  con.query('SELECT * FROM topics WHERE topicId = ?', [req.params.topicId], (err, results, fields) => {
    if(err) {
      throw err;
    }
    res.send(JSON.stringify(results));
  });
});

router.post('/hackathons/register', (req,res)=>{
  // expecting to receive event ID, project title, and project descript
  console.log(req)
})

router.get('/hackathons/:topicId/find-teammates', (req, res) => {
  con.query('SELECT * FROM users' + 
    ' INNER JOIN users ON teamless.userId = users.userId' + 
    ' AND teamless.topicId = ?', [req.params.topicId], (err, results, fields) => {
    if(err) {
      throw err;
    }
    res.send(JSON.stringify(results));
  });
});

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;