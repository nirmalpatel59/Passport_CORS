var gulp = require("gulp");
var nodemon = require("gulp-nodemon");

gulp.task("serve",function(){
	var options = {
		script:"index.js",
		delayTime:1,
		env:{
			PORT: 5000
		},
		ext: 'js html css'
	};
	return nodemon(options).on("restart", function(ev){
		console.log("restarting the server.......");
	});
});

gulp.task("default",["serve"]);
