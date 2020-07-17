var exec = require('child_process').exec;

function send (data) {
		var Git;
		for (var i = 2;i < data.length;i++) {
				Git += data[i] + " ";
		}
		exec("git " + Git, function (err, stdout, srderr) {
				err?console.log(srderr.replace(/git/g, "fgit")):console.log(stdout);
		})
}

function git (data) {
		/init|add|mv|restore|rm|sparse-checkout|bisect|biff|grep|log|show|status|branch|commit|merge|rebase|reset|switch|tag|fetch|pull|push/.test(data[2])?send (data):console.log("抱歉，没有这个命令");
}

module.exports = git;
