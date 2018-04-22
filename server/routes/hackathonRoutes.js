const router = require('express').Router(),
      mysql  = require('mysql'),
      config = require('../config.json');

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

router.get('/hackathons/new', (req, res) => {
  if(!req.isAuthenticated()) {
    console.log('User is not authenticated, redirecting to login page');
    res.redirect('/auth/github');
  } else {
    res.send('Create a new Hackathon here');
  }
});

router.get('/hackathons/:topicId', (req, res) => {
  con.query('SELECT * FROM topics WHERE topicId = ?', [req.params.topicId], (err, results, fields) => {
    if(err) {
      throw err;
    }
    res.send(JSON.stringify(results));
  });
});

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

router.post('/hackathons', (req, res) => {
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

module.exports = router;