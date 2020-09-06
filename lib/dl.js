var exec = require('child_process').exec,
    Re = new RegExp("^https?://(github\\.com|hub\\.fastgit\\.org)/.*/.*/.*/.*", "i"),
    fastRe = new RegExp("^https?://download\\.fastgit\\.org/.*/.*/.*/.*", "i")

function date() {
    return new Date().getTime();
}

function dl (link) {
    var start = date()
    Re.test(link)?exec("wget " + link.replace(/github.com|hub.fastgit.org/, "download.fastgit.org"), function (err, stdout, srderr) {
	err?console.log("Oops, there's been a mistake!\n\n" + srderr):console.log("Download complete :)" + " Use time " + (date() - start) + "ms");
    }):fastRe.test(link)?exec("wget " + link, function (err ,stdout, srderr) {
	err?console.log("Oops, there's been a mistake!\n\n" + srderr):console.log("Download complete :)" + " Use time " + (date() - start) + "ms");
	}):(console.log("Link resolution failed and download non-accelerable files began (っ﹏-) ."),exec("wget " + link))
}

module.exports = dl;
