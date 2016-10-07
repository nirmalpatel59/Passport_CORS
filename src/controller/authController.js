var Cloudant     = require('cloudant');
var cloudant     = Cloudant("https://nirmalpatel59:nirmalpatel@nirmalpatel59.cloudant.com");
var db           = cloudant.db.use("yhsqizvkmp");

var express = require("express");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var authController = function() {
	var getLoggedInuserDetails = function(req,res) {
		console.log("called");
		console.log(req.body);
		// res.send("hello");
		// db.view("tamsa","getUserInfo",{key:req.body.username}, function(err,data) {
		// 	if(!err) {
		// 		if(data.rows.length > 0) {
		// 			res.send(data.rows[0].value);
		// 		}else {
		// 			console.log("data rows length is 0.");
		// 			res.send("");
		// 		}
		// 	}else {
		// 		console.log("err from view");
		// 	}
		// });
	  db.get("org.couchdb.user:"+req.body.username, function(err, body) {
	  	if(!err) {
	  		res.send(body);
	  	}else {
	  		res.send(null);
	  		// res.status(200).send({status:200, message: 'Credential are invalid.', type:'internal'}); 
	  	}
		});
	};
	return {
		getLoggedInuserDetails: getLoggedInuserDetails
	};
};
module.exports = authController;