var exec = require('child_process').exec;
var Re = new RegExp("http[s]?://github.com/.*/.*/releases/download/.*/.*");

function dl (link) {
		if (Re.test(link)) {
				exec("wget " + link.replace(/github.com/, "download.fastgit.org"), function (err, stdout, srderr) {
						err?console.log("哎呀出错了！\n\n" + srderr):console.log("看来速度还是不错滴2333");
				})
		} else {
				console.log("加速失败(っ﹏-) .｡")
		}
}

module.exports = dl;
