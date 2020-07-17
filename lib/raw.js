var exec = require('child_process').exec;

function raw (link) {
		exec("wget " + link.replace("raw.githubusercontent.com", "raw.fastgit.org"), function (err, stdout, srderr) {
				err?console.log("哎呀出错了！\n\n" + stdout):console.log("看来速度还是不错滴2333")
		})
}

module.exports = raw;
