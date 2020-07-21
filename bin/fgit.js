#! /usr/bin/env node

var git = require("./../lib/git"),
		exec = require('child_process').exec,
		argv = process.argv,
		raw = require("./../lib/raw"),
		dl = require("./../lib/dl"),
		fs = require("fs"),
		ping = require("./../lib/ping"),
		cloneRe = new RegExp("^(https?|git)://(github\\.com|hub\\.fastgit\\.org)/.*/.*", "i"),
		huan = new RegExp(":github.com/", "i"),
		githttp = new RegExp("^(https?|git)://.*\..*", "i")

function clone () {
		var k = "";
		for (i = 2;i<argv.length;i++){
				if (githttp.test(argv[i])) {
						var j = i;
						continue;
				}
				k +=  " " + argv[i] ;
		}
		if (!k) k = "";
		argv[2] == "clone"?/git@github.com/i.test(argv[j])?
				(
						console.log("开始下载..."), 
						k.replace("clone", ""), 
						exec("git clone " + argv[j] + k, function (err, stdout, srderr) {
				if (err) return console.log("出错啦！\n\n" + srderr)
				console.log("\n克隆完成\n由于一系列原因，我们无法为您提供github ssh 克隆加速:(\n");
		})):
				(console.log("开始下载..."), 
				exec("git clone " + argv[j].replace(huan, "://hub.fastgit.org/") + k.replace("clone", ""), function (err, stdout, srderr) {
										if (err) {
												return console.log("\n出错了请重试\n\n" + srderr + "\n");
										}
										cloneRe.test(argv[j])?console.log("\n看来加速还是不错滴2333\n"):console.log("\n下载完毕\n")
				}
								)
				):(
						k.replace("clone", ""), 
						exec("git clone " + argv[j] + k, function (err, stdout, srderr) {
						console.log(srderr);
				}), 
						console.log("开始下载")
				)
}

if (!argv[2]) {
		console.log(`\n欢迎使用fgit。\n
由厉害制作\n\n用 fgit clone [github仓库链接，只能是http或https的] 加速仓库克隆。
附加几个参数：
r 加速raw.githubusercontent.com的下载速度
d 加速github仓库打包代码下载速度\n`);
		process.exit();
}

argv[2] == "clone" ?
		clone()
:argv[2] == "r"?
		argv[3]?raw(argv[3]):console.log("\n请给个raw.githubusercontent.com链接\n")
:argv[2] == "d"?
		argv[3]?dl(argv[3]):console.log("\n请给个github下载链接吧\n")
:argv[2] == "ping"?
		ping()
:git(argv)

