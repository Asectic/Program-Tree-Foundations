//import mongoose
var mongoose = require('mongoose');

//schema to represent each exercise where it has exercise name, lessonNumber, grade of exercise, and completed status

var exerciseSchema = mongoose.Schema({

	name: String,
	description: String,
	lessonNumber: String,
	grade: {type: String, default: "0"},
	completed: {type: Boolean, default: false},
	pastAttempts: Array


});

//allow our schema to be accessible from the app and the routes
module.exports = mongoose.model('Exercise', exerciseSchema);