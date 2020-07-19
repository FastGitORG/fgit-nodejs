var exec = require('child_process').exec,
		Re = new RegExp("^https?://github\\.com|hub\\.fastgit\\.org/.*/.*/.*/.*", "i"),
		fastRe = new RegExp("^https?://download\\.fastgit\\.org/.*/.*/.*/.*", "i")

function dl (link) {
		Re.test(link)?exec("wget " + link.replace(/github.com|hub.fastgit.org/, "download.fastgit.org"), function (err, stdout, srderr) {
						err?console.log("哎呀出错了！\n\n" + srderr):console.log("看来速度还是不错滴2333");
				}):fastRe.test(link)?exec("wget " + link, function (err ,stdout, srderr) {
						err?console.log("哎呀出错了！\n\n" + srderr):console.log("下载完毕，享受读代码的乐趣吧:)");
				}):console.log("解析链接，导致加速失败(っ﹏-) .｡")
}

module.exports = dl;
