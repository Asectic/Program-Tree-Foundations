var express = require('express');
var router = express.Router();
var fs = require('fs');
//var compiler = require('../compilerjs/exec.js');
var exec = require('child_process').exec;
var User = require('../Schema/user.js');
var Lesson = require('../Schema/lessons.js');
var Exercise = require('../Schema/exercise.js');


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
		
		var quest_num = req.body.question.trim() + ".c";
		console.log(quest_num);
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
	console.log(name);
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
/*
	//link to chapter 1 content page
	router.get('/contentCh1', function(req, res, next){

		res.render('contentCh1', {title: 'Chapter 1: Memory Allocation'});

	});
*/

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

	router.get('/memorymodel', function(req, res, next){

		res.render('memory_model', {title: 'Memory Model'});
	});

	//handle ajax post
	router.post('/ajax_compile', function(req, res, next){
		//infos for data base
		var lesson_name = req.body.lesson_name;
		var lesson_number = req.body.lesson_number;
		var exercise_number = req.body.exercise_number;
		//save the users code that wants to be compiled
		var code = req.body.code;
		//save user's code to .c
		var write_to = "lesson" + lesson_number + "_" + "ex" + exercise_number + ".c";
		
		//write the code to the file
		fs.writeFile(write_to, code, function(err){
			if(err){
				return console.log(err);
			}
			console.log("The file was saved");
		});

		//name for corresponding test cases
		var test_name = write_to.substring(0, write_to.length - 2) + "_test.c";

		//compiles the code and send result to client
		var system = req.headers['user-agent'].split(" ")[1];
		console.log(system);

		//test case after compiling
		var output_file = test_name.substring(0, test_name.length - 2) + '.exe';
		console.log("outfile: " + output_file);
		if(system != "(Windows"){
			output_file = "./" + test_name.substring(0, quest_test.length - 2) + '.exe';
		}

		//compiles the code with gcc and then executes the code
		var child = exec('gcc ' + test_name + ' -o' + output_file + '&& ' + output_file + "&& rm " + output_file, function(err, stdout, stderr){
		if (stderr){
			console.log("Failed at compiling");
			console.log(stderr.toString());
			res.send({result:"code compiling error", details: stderr.toString(), code: code.toString()});
		}else{
			console.log("Successful compiling");
			console.log(stdout.toString());
			var pass = stdout.substring(stdout.length-18, stdout.length-2);
			var validate = "Fail...";
			if (pass == "ALL TESTS PASSED"){
				validate = "PASS!!!";
			};
			res.send({result:validate, details: stdout.toString(), code: code.toString()});
		}
		});
	});

	return router;
}

