//import mongoose
var mongoose = require('mongoose');

//each lesson has a name, description to tell us what the coruse is , lessonNumber to represent the node, completed status and the grade

var lessonSchema = mongoose.Schema({
	
	name: String,
	description: String,
	user_id: String,
	lessonNumber: String,
	grade: {type: String, default: "0"},
	completed: {type: Boolean, default: false}


});

//allow our schema to be accessible from the app and the routes
module.exports = mongoose.model('Lesson', lessonSchema);