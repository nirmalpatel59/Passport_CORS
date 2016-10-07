var express = require("express");
var app = express();
var authrouter = express.Router();
var authController = require("../controller/authController")();
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
authrouter.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', 'https://nirmalpatel59.cloudant.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // we have added this Access-Control-Allow-Headers option
    res.header('Access-Control-Allow-Headers', 'X-Auth-Key');
    next();
});
authrouter.route("/")
  .post(authController.getLoggedInuserDetails);

module.exports = authrouter;