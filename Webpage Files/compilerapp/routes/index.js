var express = require('express');
var router = express.Router();
var fs = require('fs');
var string = "Hello World";



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
	
	fs.writeFile("code.c", string, function(err){
		if(err){
			return console.log(err);
		}
		console.log("The file was saved");
	});
	
	var code = req.body.code;
	res.send(code);

});

module.exports = router;
