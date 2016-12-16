//import mongoose
var mongoose = require('mongoose');

//each lesson has a name, description to tell us what the coruse is , lessonNumber to represent the node, completed status and the grade

var lessonSchema = mongoose.Schema({
	
	name: String,
	description: String,
	user_id: String,
	lessonNumber: String,
	grade: {type: String, default: "0"},
	passlesson1: {type: Boolean, default: false},
	passlesson2: {type: Boolean, default: false},
	passlesson3: {type: Boolean, default: false},
	completed: {type: Boolean, default: false}


});

//allow our schema to be accessible from the app and the routes
module.exports = mongoose.model('Lesson', lessonSchema);