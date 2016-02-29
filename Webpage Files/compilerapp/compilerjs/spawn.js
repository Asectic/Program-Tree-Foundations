var spawn = require('child_process').spawn;

module.exports = function compiler(filename){
	// var sta = "normal"; 
	// //parse filename and add .exe to the end
	var name = filename.substring(0, filename.length - 2) + '.exe';

	var compile = spawn('gcc', [filename, '-o', name]);
	compile.stdout.on('data', function (data) {
	    console.log('stdout: ' + data);
	});
	compile.stderr.on('data', function (data) {
	    console.log(String(data));
	});
	compile.on('close', function (data) {
	    if (data === 0) {
	        var run = spawn(name, []);
	        run.stdout.on('data', function (output) {
	            console.log(String(output));
	        });
	        run.stderr.on('data', function (output) {
	            console.log(String(output));
	        });
	        run.on('close', function (output) {
	            console.log('stdout: ' + output);
	        })
	    }
	})
}
