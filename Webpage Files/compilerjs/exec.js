var exec = require('child_process').exec;
var child = exec('gcc temp.c && a.exe', function(err, stdout, stderr){
	console.log(stdout)
});