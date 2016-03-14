var express = require('express');
var router = express.Router();
var fs = require('fs');
//var compiler = require('../compilerjs/exec.js');
var exec = require('child_process').exec;

module.exports = function(passport){
	
	/* GET home page. */
	router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Progamming Tree Foundations' });
	});

	//display the textbox page where the code will be typed
	router.get('/compile', function(req, res, next){

		res.render('compilecode');
	});

	//handle request to compile the code
	router.post('/compile', function(req, res, next){

		//save the users code that wants to be compiled
		var code = req.body.code;
		//save the user's name
		var fileName = req.body.name.trim() + ".c"; 
	
		//write the code to the file
		fs.writeFile(fileName, code, function(err){
			if(err){
				return console.log(err);
			}
			console.log("The file was saved");
		});

		//compiles the code and send result to client
		var system = req.headers['user-agent'].split(" ")[1];
		console.log(system);

		var name = fileName.substring(0, fileName.length - 2) + '.exe';
		if(system != "(Windows"){
			name = "./" + fileName.substring(0, fileName.length - 2) + '.exe';
		}
	
		//compiles the code with gcc and then executes the code
		var child = exec('gcc ' + fileName + ' -o' + name + '&& ' + name, function(err, stdout, stderr){
		if (stderr){
			console.log(stderr.toString());
			res.send(stderr.toString());
		}else{
			console.log(stdout.toString());
			res.send(stdout.toString());
		}
		});
	});

	router.get('/lessons', function(req, res, next){

		res.render('lessons', {title: 'Progamming Tree Foundations'});

	});

	router.get('/signup', function(req, res, next){

		res.render('signup', {title: 'Progamming Tree Foundations'});

	});

	router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/', // redirect to the home page if signup is successful
        failureRedirect : '/error' // redirect to error page if signup failed
     }));

	router.get('/login', function(req, res, next){
		res.render('login', {title: 'Progamming Tree Foundations'});
	});

	router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the home page if signup is successful
        failureRedirect : '/error' // redirect to error page if signup failed
	}));

	router.get('/error', function(req, res, next){
		//render the error page to the client
		res.render('error');
	});

	//link to chapter 1 content page
	router.get('/contentCh1', function(req, res, next){

		res.render('contentCh1', {title: 'Chapter 1: Memory Allocation'});

	});

	router.get('/memoryGame', function(req, res, next){

		res.render('memorygame', {title: 'Memory Model Game'});
	});

	//new addon
	router.get('/pointers', function(req, res, next){

		res.render('pointer_exercise', {title: 'Pointer'});
	});

	//basic syntax
	router.get('/basic', function(req, res, next){

		res.render('basic_syntax', {title: 'Basic Syntax'});
	});
	return router;
}

