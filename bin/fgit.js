#! /usr/bin/node

var git = require("./../lib/git")
var exec = require('child_process').exec;
var argv = process.argv;
var cloneRe = new RegExp("http[s]?://github.com/.*/.*|git@github.com:.*/.*", "i");

if (!argv[2]) {
		console.log("欢迎使用fgit。\n由厉害制作\n\n用 fgit clone [github仓库链接，只能是http或https的] 加速仓库克隆。");
		process.exit();
}

if (argv[2] == "clone") {
		argv[2] == "clone" && cloneRe.test(argv[3])?exec("git clone " + argv[3].replace("github.com", "hub.fastgit.org"), function (err, stdout, srderr) {
				console.log("看来加速还是不错滴2333");
		}):(function () {
				console.log("第三个参数有问题哦");
				process.exit();})()
} else {
		git(argv);
}
