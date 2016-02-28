var express = require('express');
var router = express.Router();

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

	var code = req.body.code;
	res.send(code);

});

module.exports = router;
