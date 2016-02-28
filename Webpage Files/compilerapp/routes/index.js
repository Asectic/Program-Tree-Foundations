var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/compile', function(req, res, next){

	res.render('compilecode');
});


module.exports = router;
