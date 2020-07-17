#! /usr/bin/env node

var git = require("./../lib/git")
var exec = require('child_process').exec;
var argv = process.argv;
var raw = require("./../lib/raw");
var dl = require("./../lib/dl");

var cloneRe = new RegExp("http[s]?://github.com/.*/.*|git@github.com:.*/.*", "i");

if (!argv[2]) {
		console.log("\n欢迎使用fgit。\n由厉害制作\n\n用 fgit clone [github仓库链接，只能是http或https的] 加速仓库克隆。\n附加几个参数：\nr 加速raw.githubusercontent.com的下载速度\nd 加速github仓库打包代码下载速度");
		process.exit();
}

if (argv[2] == "clone") {
		argv[2] == "clone" && cloneRe.test(argv[3])?exec("git clone " + argv[3].replace("github.com", "hub.fastgit.org"), function (err, stdout, srderr) {
				console.log("\n看来加速还是不错滴2333\n");
		}):(function () {
				console.log("\n第三个参数有问题哦\n");
				process.exit();})()
} else if (argv[2] == "r") {
		argv[3]?raw(argv[3]):console.log("\n请给个raw.githubusercontent.com链接\n");
} else if (argv[2] == "d") {
		argv[3]?dl(argv[3]):console.log("请给个github下载链接吧");
} else {
		git(argv);
}
