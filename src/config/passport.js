var passport      = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var Cloudant      = require('cloudant');
var cloudant      = Cloudant("https://nirmalpatel59:nirmalpatel@nirmalpatel59.cloudant.com");
var db            = cloudant.db.use("yhsqizvkmp");

module.exports = function (app) {
	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser(function(user,cb) {
		cb(null,user);
	});

	passport.deserializeUser(function(user,cb) {
		cb(null,user);
	});

  passport.use(new LocalStrategy ({
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, cb) {
  	 db.get("org.couchdb.user:"+username, function(err, body) {
  	 	console.log(username);
  	 	console.log(password);
	  	if(!err) {
	  		if(password == body.password) {
	  			var user =  {
	  			  username: body.email,
	  			  password: body.password
	  			};
	  			cb(null,user);
	  		}else {
	  			cb(null,false);	
	  		}
	  	}else {
	  		cb(null,false);
	  	}
		});
  }));
};