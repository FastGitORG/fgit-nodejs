#! /usr/bin/env node

var git = require("./../lib/git"),
		exec = require('child_process').exec,
		argv = process.argv,
		raw = require("./../lib/raw"),
		dl = require("./../lib/dl"),
		fs = require("fs"),
		cloneRe = new RegExp("https?://github\\.com|hub\\.fastgit\\.org/.*/.*|git@github\\.com:.*/.*|git://github\\.com|hub\\.fastgit\\.org/.*/.*", "i"),
		continueRe = new RegExp("[http[s]?|git]://[]","i")

function clone () {
		argv[2] == "clone" && cloneRe.test(argv[3])?/git@github.com/i.test(argv[3])?
				(
						console.log("开始下载..."),
						exec("git clone " + argv[3], function (err, stdout, srderr) {
				if (err) return console.log("出错啦！\n\n" + srderr)
				console.log("克隆完成\n由于一系列原因，我们无法为您提供github ssh 克隆加速:(");
		})):
				(console.log("开始下载..."), 
				exec("git clone " + argv[3].replace("github.com", "hub.fastgit.org"), function (err, stdout, srderr) {
										if (err) {
												return console.log("\n出错了请重试\n\n" + srderr + "\n");
										}
										console.log("\n看来加速还是不错滴2333\n");
				}
								)
				):console.log("\n第三个参数有问题哦\n");
}

if (!argv[2]) {
		console.log("\n欢迎使用fgit。\n" +
			    "由厉害制作\n\n用 fgit clone [github仓库链接，只能是http或https的] 加速仓库克隆。\n" +
			    "附加几个参数：\n" +
			    "r 加速raw.githubusercontent.com的下载速度\n" +
			    "d 加速github仓库打包代码下载速度");
		process.exit();
}

argv[2] == "clone" ?
		clone()
:argv[2] == "r"?
		argv[3]?raw(argv[3]):console.log("\n请给个raw.githubusercontent.com链接\n")
:argv[2] == "d"?
		argv[3]?dl(argv[3]):console.log("\n请给个github下载链接吧\n")
:git(argv)

