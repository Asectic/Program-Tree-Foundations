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
        successRedirect : '/signupsuccess', // redirect to the home page if signup is successful
        failureRedirect : '/error' // redirect to error page if signup failed
     }));

	router.get('/login', function(req, res, next){
		res.render('login', {title: 'Progamming Tree Foundations'});
	});

	router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/loginsuccess', // redirect to the home page if signup is successful
        failureRedirect : '/error' // redirect to error page if signup failed
	}));

	router.get('/signupsuccess',isLoggedIn, function(req, res, next){

		res.render('signupsuccess', {title: 'Signed up Successfully!', user: req.user});

	});

	router.get('/loginsuccess', isLoggedIn, function(req, res, next){


		res.render('loginsuccess', {title: 'Logged In Successfully!', user: req.user});

	});

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

	router.get('/variable', function(req, res, next){

		res.render('variable', {title: 'Variable'});
	});

	//handle ajax post
	router.post('/ajax_compile', function(req, res, next){
		//infos for data base
		var lesson_name = req.body.lesson_name;
		var lesson_number = req.body.lesson_number;
		var exercise_name = req.body.exercise_name;
		var exercise_number = req.body.exercise_name.substring(8, req.body.exercise_name.length);
		//save the users code that wants to be compiled
		var code = req.body.code;

		console.log(lesson_name + " " + lesson_number + " " + exercise_name);
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
			var validate = false;
			if (pass == "ALL TESTS PASSED"){
				validate = true;
			};
			//user is logged in
			console.log(req.isAuthenticated());
			/*
			if(req.isAuthenticated()){

				Exercise.findOne({'user_id' : req.user_id, 'lessonNumber': lesson_number, 'name':exercise_name}, function(err, userExercise){
						console.log(req.user_id);
						console.log(lesson_number);
						console.log(exercise_name);
					
					if(err){
						throw err;
					}
					if(!userExercise){
						console.log(exercise_name);
						throw new Error("exercise does not exist.");
					}
					//saves user's state on exercise(passed or failed)
					userExercise.completed = validate;

					if(validate){
						userExercise.grade = "100";
					}
					else{
						userExercise.grade = "0";
					}
					//save users code attempts and past results
					userExercise.pastAttempts.push("LOL");

					userExercise.save(function(err){
                        if(err){
                            //throw error if cannot save to database
                            throw err;
                        }
                    });
/*
					//notify the lesson that the exercise is completed
                    Lesson.findOne();
                    
				});

			}
*/
			//send them results only
			res.send({result:validate, details: stdout.toString(), code: code.toString()});
		}
		});
	});

		
	// Logout
	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}

function isLoggedIn(req,res,next){

	if(req.isAuthenticated()){

		return next();
	}

	res.redirect('/');
}






