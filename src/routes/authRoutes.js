var express = require("express");
var app = express();
var authrouter = express.Router();
var authController = require("../controller/authController")();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

authrouter.route("/")
	.get(authController.getLoggedInuserDetails);

module.exports = authrouter;