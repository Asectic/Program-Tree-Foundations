//import mongoose
var mongoose = require('mongoose');

//schema to represent each exercise where it has exercise name, lessonNumber, grade of exercise, and completed status

var exerciseSchema = mongoose.Schema({

	name: String,
	description: String,
	lessonNumber: String,
	grade: String,
	completed: Boolean,
	pastAttempts: Array


});

//allow our schema to be accessible from the app and the routes
module.exports = mongoose.model('Exercise', exerciseSchema);