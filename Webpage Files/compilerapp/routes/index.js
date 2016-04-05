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

		if(req.isAuthenticated()){

			res.render('index', { title: 'Progamming Tree Foundations', user: req.user });
		}
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

		if(req.isAuthenticated()){

			res.render('lessons', {title: 'Progamming Tree Foundations', user: req.user});
		}

		res.render('lessons', {title: 'Progamming Tree Foundations'});

	});

	router.get('/signup', function(req, res, next){

		if(req.isAuthenticated()){
			
			res.render('signup', {title: 'Progamming Tree Foundations', user: req.user});
		}

		res.render('signup', {title: 'Progamming Tree Foundations'});

	});

	router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/signupsuccess', // redirect to the home page if signup is successful
        failureRedirect : '/error' // redirect to error page if signup failed
     }));

	router.get('/login', function(req, res, next){

		if(req.isAuthenticated()){
			res.render('login', {title: 'Progamming Tree Foundations', user: req.user});
		}
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

	router.get('/chapter1', function(req, res, next){

		if(req.isAuthenticated()){
			res.render('chapter1', {title: 'Chapter 1', user: req.user_id});
		}

		res.render('chapter1', {title: 'Chapter 1'});

	});

	router.get('/chapter2', function(req, res, next){

		if(req.isAuthenticated()){
			res.render('chapter2', {title: 'Chapter 2', user: req.user_id});
		}

		res.render('chapter2', {title: 'Chapter 2'});

	});


	router.get('/error', function(req, res, next){
		//render the error page to the client
		res.render('error');
	});


	router.get('/memoryGame', function(req, res, next){

		res.render('memorygame', {title: 'Memory Model Game'});
	});

	//new addon
	router.get('/pointers', function(req, res, next){

		if(req.isAuthenticated()){
			
			Exercise.findOne({'user_id': req.user._id, 'lessonNumber': "2"}, function(err, exercises){

				var exercises_status = [];
				var percent_completed = 0;

				for(var i = 0; i < exercises.length; i++){

					exercises_status.push(exercises.completed);

				}

				Lesson.findOne({'user_id': req.user._id, 'lessonNumber': "2"}, function(err, lessons){

						if(lessons.passlesson1){
							percent_completed += 1;
						}
						if(lessons.passlesson2){
							percent_completed += 1;
						}
						if(lessons.passlesson3){
							percent_completed += 1;
						}
					console.log(req.user._id);
					res.render('pointer_exercise', {title: 'Pointer', user: req.user._id, ex_status: exercises_status, lesson_status: percent_completed });
				});

			});

		}
		else{

		res.render('pointer_exercise', {title: 'Pointer'});
		}
	});

	//basic syntax
	router.get('/basic', function(req, res, next){

		if(req.isAuthenticated()){
			res.render('basic_syntax', {title: 'Basic Syntax', user: req.user_id});
		}

		res.render('basic_syntax', {title: 'Basic Syntax'});
	});

	router.get('/memorymodel', function(req, res, next){

		if(req.isAuthenticated()){
			res.render('memory_model', {title: 'Memory Model', user: req.user_id});
		}


		res.render('memory_model', {title: 'Memory Model'});
	});

	router.get('/variable', function(req, res, next){

		if(req.isAuthenticated()){
			res.render('variable', {title: 'Variable', user: req.user_id});
		}
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
		var child = exec('gcc ' + test_name + ' -o' + output_file + '&& ' + output_file, function(err, stdout, stderr){
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
			console.log("isAuthenticated: " + req.isAuthenticated());
		
			if(req.isAuthenticated()){

				Exercise.findOne({'user_id' : req.user._id, 'lessonNumber': lesson_number, 'name':exercise_name}, function(err, userExercise){
						console.log("req.user._id: " + req.user._id);
						console.log("lesson num: " + lesson_number);
						console.log("exercise name: " + exercise_name);
					
					if(err){
						throw err;
					}
					if(!userExercise){
						console.log(exercise_name);
						throw new Error("exercise does not exist.");
					}

					if(validate){
						//saves user's state on exercise(passed or failed)
						userExercise.completed = validate;
						userExercise.grade = "100";
						console.log("100%!");

						//notify the lesson that the exercise is completed
                    	Lesson.findOne({'_id': userExercise.lesson_id}, function(err, lessonExercise){
                    		console.log("HELLO");

                    		if((lesson_number == "1") && !lessonExercise.passlesson1){

                    			lessonExercise.passlesson1 = true
                    		}

                    		if((lesson_number == "2") && !lessonExercise.passlesson2){

                    			lessonExercise.passlesson2 = true
                    		}
                    		
                    		if((lesson_number == "3") && !lessonExercise.passlesson3 ){

                    			lessonExercise.passlesson3 = true
                    		}

                    		//check that all 3 answers have been completed
                    		if(lessonExercise.passlesson1 && lessonExercise.passlesson2 && lessonExercise.passlesson3){

                    			lessonExercise.completed = true;
                    		}

                    		//save lesson's new completed statuss to database
                    		lessonExercise.save(function(err){

                    			if(err){

                    				throw err;
                    			}
                    			console.log("The lesson has been updated with passed exercises.");
                    		});                		
                    	});
					}

					//save users code attempts and past results
					console.log(code.toString() + "\n" + stdout.toString());
					var codeandresult = [code.toString(), stdout.toString()];
					userExercise.pastAttempts.push(codeandresult);

					userExercise.save(function(err){
                        if(err){
                            //throw error if cannot save to database
                            throw err;
                        }
                        console.log("The exercises are saved in here");
                    });

					//tell user that this lesson is done or not
                    Lesson.findOne({'_id': userExercise.lesson_id}, function(err, lessonExercise){

                   		//send them results and the finished status
						res.send({result:validate, details: stdout.toString(), code: code.toString(), passlesson: lessonExercise.completed});
						res.end(); 

                    });
                   
				});

			}
			else{

				//send them results only
				res.send({result:validate, details: stdout.toString(), code: code.toString()});
				res.end();
			}

		}
		});
	});

		
	// Logout
	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	router.get('/codehistory/:lessonnum/:exercisename', isLoggedIn, function(req, res, next){

		var lesson_number = req.params.lessonnum;
		var exercise_name = req.params.exercisename;
		console.log(req.user._id);
		console.log(exercise_name);
		console.log(lesson_number);
	
		Exercise.findOne({'user_id' : req.user._id, 'lessonNumber': lesson_number, 'name': exercise_name}, function(err, exercise){

			if(err){

				throw err;
			}
			else if(!exercise){

				throw new Error("exercise does not exist.");
			}

			res.render('codehistory', { title: "Code History", result: exercise});

		});

	});

	return router;
}

function isLoggedIn(req,res,next){

	if(req.isAuthenticated()){

		return next();
	}

	res.redirect('/');
}






