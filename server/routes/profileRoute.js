const router = require('express').Router(),
			config = require('../config.json'),
			mysql  = require('mysql');

const con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

router.get('/profile/:username', (req,res) => {
  con.query('SELECT * FROM users WHERE username = ?' [req.params.username], (err, results, fields) => {
    if(err) {
      res.send('404 page goes here');
    }
    res.send(JSON.stringify(results));
  });
});

module.exports = router;