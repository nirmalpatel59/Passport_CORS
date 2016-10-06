var https = require('https');
var fs = require('fs');

var PORT = process.env.PORT || 5000;

var express      = require("express");
var app          = express();
var bodyParser   = require("body-parser");
var cookieParser = require("cookie-parser");
var session      = require("express-session");
var passport     = require("passport");
var strategy     = require("passport-local").Strategy;
var Cloudant     = require('cloudant');
var cloudant     = Cloudant("https://nirmalpatel59:nirmalpatel@nirmalpatel59.cloudant.com");
var db           = cloudant.db.use("yhsqizvkmp");
var authRoutes = require("./src/routes/authRoutes");
// var cors = require("cors");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret:'cloudant'}));


// app.get('/', function (req, res) {
//   res.header('Content-type', 'text/html');
//   return res.end('<h1>Hello, Secure World!</h1>');
// });

app.use("/login",authRoutes);
// app.post('/login', function (req, res) {
// 	console.log(req.body);
//   db.get("org.couchdb.user:n@n.com", function(err, body) {
//   	res.send(body);
// 	});
// });

// app.listen(PORT, function() {
// 	console.log("server is runnning on"+PORT);
// });

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(55555);
