var exec = require('child_process').exec;

module.exports = function compiler(filename){

	//parse filename and add .exe to the end
	var name = filename.substring(0, filename.length - 2) + '.exe';
	var result ='';

	//compiles the code with gcc and then executes the code
	var child = exec('gcc ' + filename + ' -o' + name + '&& ' + name, function(err, stdout, stderr){
	if (stderr){
		console.log(stderr)
		result += stderr.toString();
		console.log(result);
		return result;
	}else{
		console.log(stdout)
		result += stdout.toString();
		console.log(result);
		return result;
	}
	});


}
