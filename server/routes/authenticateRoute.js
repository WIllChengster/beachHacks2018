const router         = require('express').Router(),
			GitHubStrategy = require('passport-github').Strategy,
			config         = require('../config.json'),
			passport       = require('passport');

passport.use(new GitHubStrategy({
	clientID: config.GITHUB_CLIENT_ID,
	clientSecret: config.GITHUB_CLIENT_SECRET,
	callbackURL: 'http://localhost:8080/auth/github/callback'
	}, (accessToken, refreshToken, profile, callback) => {
		User.findOrCreate({ githubId: profile.id }, (err, user) => {
			return callback(err, user);
		});
	}
));

router.get('/error', (err, result) => {
	res.send('Error authenticating.');
});

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github', 
	{ failureRedirect: '/error'}), (err, result) => {
  res.redirect('/');
});

module.exports = router;

