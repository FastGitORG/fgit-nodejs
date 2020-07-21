var exec = require('child_process').exec;
var Git = "git";

function send (data) {
		for (var i = 2;i < data.length;i++) {
				Git += " " + data[i];
		}
		exec(Git, function (err, stdout, srderr) {
				err?console.log(srderr):console.log(srderr + "\n" + stdout);
		})
}

function git (data) {
		send(data);
}

module.exports = git;
