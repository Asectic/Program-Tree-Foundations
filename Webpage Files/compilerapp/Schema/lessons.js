//import mongoose
var mongoose = require('mongoose');


var lessonSchema = mongoose.Schema({
	
	lessonNumber: String

});

//allow our schema to be accessible from the app and the routes
module.exports = mongoose.model('Lesson', lessonSchema);