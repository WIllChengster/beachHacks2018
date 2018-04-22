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

router.post('/hackathons/new', (req, res) => {
  console.log(req.body);
  res.send('Create a new Hackathon here');
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

  console.log(req.body);
  // let hackathon = {
  //   title: req.body.title,
  //   description: req.body.description,
  //   dateStart: req.body.dateStart,
  //   dateEnd: req.body.dateEnd,
  //   progress: req.body.progress,
  //   coverArtUrl = req.body.coverArtUrl
  // };

//   con.query('INSERT INTO topics SET ?', hackathon, (err, results, fields) => {
//     if(err) {
//       throw err;
//     }
//     console.log('Created new Hackathon post.');
//   });

//   // let admins = {
//   //   userId: ,
//   //   topicId: 
//   // };

//   con.query('INSERT INTO admins SET ?', admins, (err, results, fields) => {
//     if(err) {
//       throw err;
//     }
//     console.log('Added admins into the database');
//   });
 });

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;