var LocalStrategy = require('passport-local').Strategy;
var User = require('../Schema/user');

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

    	usernameField = 'email', // let our username and password fields be determined by email and password sent by user
    	passwordField = 'password',
    	passReqToCallback: true // passes the callback to the request handler
    	
    	},
    	function(req, email, password, done){

    		process.nextTick(function(){
    			//makes find one function only run once data is sent from client
    			//in database look for user with that email,
    			User.findOne({'email': email}, function(err, data){

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

						//save the user and fields to the database
						newUser.save(function(err){
							if(err){
								//throw error if cannot save to database
								throw err;
							}
							//return the new user that is saved
							return done(null, newUser);

						});

    				}
    			});
    		});
        }
    ));

	//login strategy for the user

	    passport.use('local-login', new LocalStrategy({

    	usernameField = 'email', // let our username and password fields be determined by email and password sent by user
    	passwordField = 'password',
    	passReqToCallback: true // passes the callback to the request handler
    	
    	},
    	function(req, email, password, done){

    		process.nextTick(function(){
    			//makes find one function only run once data is sent from client
    			//in database look for user with that email,
    			User.findOne({'email': email}, function(err, data){

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

						if(!data.validPassword){
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