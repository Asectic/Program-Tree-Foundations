var exec = require('child_process').exec;

module.exports = function compiler(filename){

	//parse filename and add .exe to the end
	var name = filename.substring(0, filename.length - 2) + '.exe';

	//compiles the code with gcc and then executes the code
	var child = exec('gcc ' + filename + ' -o' + name + '&& ' + name, function(err, stdout, stderr){
	if (stderr){
		console.log(stderr)
		return(stderr);
	}else{
		console.log(stdout)
		return(stdout);
	}
	});


}
