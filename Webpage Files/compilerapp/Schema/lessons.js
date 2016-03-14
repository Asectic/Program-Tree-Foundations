//import mongoose
var mongoose = require('mongoose');

//each lesson has a name, description to tell us what the coruse is , lessonNumber to represent the node, completed status and the grade

var lessonSchema = mongoose.Schema({
	
	name: String,
	description: String,
	lessonNumber: String,
	grade: String,
	exercises: Array,
	completed: {type: Boolean, default: false}


});

//allow our schema to be accessible from the app and the routes
module.exports = mongoose.model('Lesson', lessonSchema);