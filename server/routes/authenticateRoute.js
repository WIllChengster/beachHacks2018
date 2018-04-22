const router         = require('express').Router(),
			GitHubStrategy = require('passport-github').Strategy,
			config         = require('../config.json'),
			passport       = require('passport'),
      mysql  = require('mysql');

const con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

passport.use(new GitHubStrategy({
		clientID: config.GITHUB_CLIENT_ID,
		clientSecret: config.GITHUB_CLIENT_SECRET,
		callbackURL: 'http://localhost:8080/auth/github/callback'
	}, 
	function (accessToken, refreshToken, profile, done) {
		// console.log(profile._json)
		con.query('SELECT * FROM users WHERE userId = ?', [profile._json.id], (err, results) => {
			// If user does not exist in database, create a new user
			// console.log(results)
			if(results.length===0) {
				let user = {
					userId: profile._json.id,
					fullName: profile.displayName,
					username: profile.username,
					avatarURL: profile.photos[0].value
				}

				// console.log('User doesn\'t exist');
				// console.log(user)
				con.query('INSERT INTO users SET ?', user, (err, results, fields) => {
					if(err) {
						throw err;
					}
					// console.log('Added ' + profile.json._id + ' to the database');
					return done(null, user);
				});
			} else {
				// console.log('user exists: ', results);
				done(null, results);
			}
		});
	}
));

passport.serializeUser((user, done) => {
	console.log("REACHED SERALIZE")
	console.log(user[0])
	done(null, user[0].userId);
});

passport.deserializeUser((id, done) => {
	console.log('DESERIALIZING')
	con.query('SELECT * FROM users WHERE userId = ?', [id], (err, results) => {
		if(err) {
			throw err;
		}
		done(null, results[0]);
	})
});

router.get('/auth/error', (err, res) => {
	res.send(err);
});

router.get('/auth/check', (req, res) => {
	
	let authenticated = null;
	if(req.isAuthenticated()) {
		authenticated = true;
	} else {
		authenticated = false;
	}
	console.log(authenticated)

	res.send({authenticated});
});

router.get('/auth/login', passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github'), (err, res) => {
  res.redirect('/');
});

router.get('/auth/logoff', (req, res) => {
	console.log('logging off')
	req.logout();
	req.session.destroy( () => {
        res.redirect('/');  
    } )
});

module.exports = router;

