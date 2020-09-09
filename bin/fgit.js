#! /usr/bin/env node

const git = require("./../lib/git"),
    exec = require('child_process').exec,
    argv = process.argv,
    raw = require("./../lib/raw"),
    dl = require("./../lib/dl"),
    fs = require("fs"),
    ping = require("./../lib/ping"),
    cloneRe = new RegExp("^(https?|git)://github\\.com/[a-z]*/[a-z]*", "i"),
    //huan = new RegExp(":github.com/", "i"),
    githttp = new RegExp("^((https?|git)://.*\\..*|git@.*\\..*:)", "i")

function clone() {
    var k = "";
    for (i = 2;i<argv.length;i++){
	if (githttp.test(argv[i])) {
	    var j = i;
	    continue;
        }
    k +=  " " + argv[i] ;
    }
    k.replace("clone", "")
    if (!k) k = "";
    if (argv[2] === "clone") {
        // ssh
	if (/^git@github.com:/i.test(argv[j])) {
	    console.log("For a number of reasons, we can not accelerate for github ssh :(");
	    console.log("Start download...")
	    exec("git clone " + argv[j], function(err, stdout, srderr) {
		if (err) return console.log("Whoa, there's been a mistake! :(\n\n" + srderr);
		return console.log("Download complete! :)");
	    }
	    )
	}

	// http/https/git
	if (cloneRe.test(argv[j])) {
	    var z = 1;
	    console.log("Start speeding up the download...");
	    exec("git clone " + argv[j], function(err, stdout, srderr) {
		if (err) return console.log("There's been a mistake! :(\n\n" + srderr);
		return console.log("Download complete! :)");
	    })
	}
	
	// Other
	if (argv[j] && typeof z === "undefined") {
	    console.log("Start download...");
	    exec("git clone " + argv[j], function(err, stdout, srderr) {
		if (err) return console.log("There's been a mistake! :(\n\n" + srderr);
		return console.log("Download complete! :)");
	    })
	}

	// error
	if (!j) {
            return console.log("What you provide is not a link!")
	}
	if (/git@hub.fastgit.org:/.test(argv[j])) {
	    return console.log("We will cancel this acceleration for various reasons!");
	}
}
       // Abandoned!
       /*argv[2] == "clone"?/git@github.com/i.test(argv[j])?
	(
	console.log("开始下载..."), 
	k.replace("clone", ""), 
	exec("git clone " + argv[j] + k, function (err, stdout, srderr) {
	    if (err) return console.log("There's been a mistake!\n\n" + srderr)
		console.log("\n克隆完成\n由于一系列原因，我们无法为您提供github ssh 克隆加速:(\n");
	})):(console.log("开始下载..."), 
	    exec("git clone " + argv[j].replace(huan, "://hub.fastgit.org/") + k.replace("clone", ""), function (err, stdout, srderr) {
		if (err) {
		    return console.log("\n出错了请重试\n\n" + srderr + "\n");
		}
		cloneRe.test(argv[j])?console.log("\nIt seems that the speed is still good\n"):console.log("\n下载完毕\n")
	    })):(
		k.replace("clone", ""), 
		exec("git clone " + argv[j] + k, function (err, stdout, srderr) {
		    console.log(srderr);
		}), 
		console.log("开始下载")
		)*/
}

if (!argv[2] || argv[2] === "fh") {
	console.log(`
Welcome to fgit-nodejs!
Made by lihai2333

help:
fgit clone <Git warehouse link>
Additional options:
r Speed up raw.githubusercontent.com download
d Speed up github Releases download
fh List this help
ping Test whether acceleration is available


Version: 1.1.5
`);
	process.exit();
}

argv[2] == "clone" ?
    clone()
:argv[2] == "r"?
    argv[3]?raw(argv[3]):console.log("\nNeed a raw.githubusercontent.com link\n")
:argv[2] == "d"?
    argv[3]?dl(argv[3]):console.log("\nNeed a github Releases link\n")
:argv[2] == "ping"?
    ping()
:git(argv)

