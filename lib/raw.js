var exec = require('child_process').exec,
		Re = new RegExp("https?://raw\\.githubusercontent\\.com|raw\\.fastgit\\.org/.*/.*/.*","i");

function raw (link) {
		Re.test(link)?exec("wget " + link.replace("raw.githubusercontent.com", "raw.fastgit.org"), function (err, stdout, srderr) {
				err?console.log("哎呀出错了！\n\n" + srderr.replace(/git/g, "fgit")):console.log("看来速度还是不错滴2333");
		}):console.log("链接有问题，加速失败:(");
}

module.exports = raw;
