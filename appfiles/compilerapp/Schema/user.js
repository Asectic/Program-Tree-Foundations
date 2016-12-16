//import mongoose modler and password hashing function
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	
	username: String,
	email: String,
	password: String

});

//hashing the password
userSchema.methods.generateHash = function(password){
	//hash the password with bcrypt's algorithm with salt value 15
	return bcrypt.hashSync(password, bcrypt.genSaltSync(15), null);
};

//check if the password is valid
userSchema.methods.validPassword = function(password){

	return bcrypt.compareSync(password, this.password);
};

//allow our schema to be accessible from the app and the routes
module.exports = mongoose.model('User', userSchema);