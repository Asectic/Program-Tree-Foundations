var LocalStrategy = require('passport-local').Strategy;
var User = require('../Schema/user.js');
var Lesson = require('../Schema/lessons.js');
var Exercise = require('../Schema/exercise.js');

module.exports = function (passport){

	//serialize the user with passport modules
	passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    //use local strategy for signup and login

    passport.use('local-signup', new LocalStrategy({

    	usernameField :'email', // let our username and password fields be determined by email and password sent by user
    	passwordField : 'password',
    	passReqToCallback: true // passes the callback to the request handler
    	
    	},
    	function(req, email, password, done){

    		process.nextTick(function(){
    			//makes find one function only run once data is sent from client
    			//in database look for user with that email,
    			User.findOne({'email' : email}, function(err, data){

    				if(err){
    					//error occured
    					return done(err);
    				}

    				if(data){
    					//data exists meaning there is an user with that email already
    					return done(null, false);
    				}
    				else{
						//user does not exist in the database
						//create a new one

						//create new user
						var newUser = new User();
						//save the fields of the user(username, email, password)
						newUser.username = req.body.username;
						newUser.email = email;
						newUser.password = newUser.generateHash(password);

                        //console.log(newUser._id);

                         //save the user and fields to the database
                        newUser.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                            //return the new user that is saved
                            return done(null, newUser);

                        });
                        //lesson 1
                        var lesson1 = new Lesson();
                        lesson1.name = "MemoryAllocation";
                        lesson1.description="Memory Allocation...";
                        lesson1.lessonNumber = "1";
                        lesson1.user_id = newUser._id;

                        //save the lessons and fields to the database
                        lesson1.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        //exercise 1
                        var l1exercise1 = new Exercise();
                        l1exercise1.name ="exercise1";
                        l1exercise1.description = "An exercise to test understanding of memory allocation";
                        l1exercise1.lessonNumber = "1";
                        l1exercise1.user_id = newUser._id;
                        l1exercise1.lesson_id = lesson1._id;

                        //save the exercise and fields to the database
                        l1exercise1.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        //exercise 2
                        var l1exercise2 = new Exercise();
                        l1exercise2.name ="exercise2";
                        l1exercise2.description = "An exercise to test understanding of memory allocation";
                        l1exercise2.lessonNumber = "1";
                        l1exercise2.user_id = newUser._id;
                        l1exercise2.lesson_id = lesson1._id;

                        //save the exercise and fields to the database
                        l1exercise2.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        var l1exercise3 = new Exercise();
                        l1exercise3.name ="exercise3";
                        l1exercise3.description = "An exercise to test understanding of memory allocation";
                        l1exercise3.lessonNumber = "1";
                        l1exercise3.user_id = newUser._id;
                        l1exercise3.lesson_id = lesson1._id;

                        //save the exercise and fields to the database
                        l1exercise3.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        var lesson2 = new Lesson();
                        lesson2.name = "Pointers";
                        lesson2.description="Pointers...";
                        lesson2.lessonNumber = "2";
                        lesson2.user_id = newUser._id;

                        lesson2.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        //
                                                //exercise 1
                        var l2exercise1 = new Exercise();
                        l2exercise1.name ="exercise1";
                        l2exercise1.description = "An exercise to test understanding of pointers.";
                        l2exercise1.lessonNumber = "2";
                        l2exercise1.user_id = newUser._id;
                        l2exercise1.lesson_id = lesson2._id;

                        //save the exercise and fields to the database
                        l2exercise1.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        //exercise 2
                        var l2exercise2 = new Exercise();
                        l2exercise2.name ="exercise2";
                        l2exercise2.description = "An exercise to test understanding of pointers.";
                        l2exercise2.lessonNumber = "2";
                        l2exercise2.user_id = newUser._id;
                        l2exercise2.lesson_id = lesson2._id;

                        //save the exercise and fields to the database
                        l2exercise2.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        var l2exercise3 = new Exercise();
                        l2exercise3.name ="exercise3";
                        l2exercise3.description = "An exercise to test understanding of pointers";
                        l2exercise3.lessonNumber = "2";
                        l2exercise3.user_id = newUser._id;
                        l2exercise3.lesson_id = lesson2._id;

                        //save the exercise and fields to the database
                        l2exercise3.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        //
                        var lesson3 = new Lesson();
                        lesson3.name = "Placeholder";
                        lesson3.description="Placeholder...";
                        lesson3.lessonNumber = "3";
                        lesson3.user_id = newUser._id;

                        lesson3.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });
                        //====//
                                                //exercise 1
                        var l3exercise1 = new Exercise();
                        l3exercise1.name ="exercise1";
                        l3exercise1.description = "An exercise to test understanding of pointers.";
                        l3exercise1.lessonNumber = "3";
                        l3exercise1.user_id = newUser._id;
                        l3exercise1.lesson_id = lesson3._id;

                        //save the exercise and fields to the database
                        l3exercise1.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        //exercise 2
                        var l3exercise2 = new Exercise();
                        l3exercise2.name ="exercise2";
                        l3exercise2.description = "An exercise to test understanding of pointers.";
                        l3exercise2.lessonNumber = "3";
                        l3exercise2.user_id = newUser._id;
                        l3exercise2.lesson_id = lesson3._id;

                        //save the exercise and fields to the database
                        l3exercise2.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        var l3exercise3 = new Exercise();
                        l3exercise3.name ="exercise3";
                        l3exercise3.description = "An exercise to test understanding of pointers";
                        l3exercise3.lessonNumber = "3";
                        l3exercise3.user_id = newUser._id;
                        l3exercise3.lesson_id = lesson3._id;

                        //save the exercise and fields to the database
                        l3exercise3.save(function(err){
                            if(err){
                                //throw error if cannot save to database
                                throw err;
                            }
                        });

                        //====//
                    }
                });
            });
        }
    ));

	//login strategy for the user

	    passport.use('local-login', new LocalStrategy({

    	usernameField :'email', // let our username and password fields be determined by email and password sent by user
    	passwordField : 'password',
    	passReqToCallback: true // passes the callback to the request handler
    	
    	},
    	function(req, email, password, done){

    		process.nextTick(function(){
    			//makes find one function only run once data is sent from client
    			//in database look for user with that email,
    			User.findOne({'email' : email}, function(err, data){

    				if(err){
    					//error occured
    					return done(err);
    				}

    				if(!data){
    					//user does not exist
    					return done(null, false);
    				}
    				else{
						//user exists in the database

						if(!data.validPassword(password)){
							//user entered the wrong password
							return done(null, false);
						}

						//return the user
						return done(null, data);

    				}
    			});
            });
        }
    ));

	return passport;
};