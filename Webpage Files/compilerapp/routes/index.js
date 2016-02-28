var express = require('express');
var router = express.Router();
var fs = require('fs');
//var string = "Hello World";



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
	var name = req.body.name + ".c"; 
	
	//write the code to the file
	fs.writeFile(name, code, function(err){
		if(err){
			return console.log(err);
		}
		console.log("The file was saved");
	});
	

	res.send(code);

});

module.exports = router;
