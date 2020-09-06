var exec = require('child_process').exec,
		Re = new RegExp("https?://(raw\\.githubusercontent\\.com|raw\\.fastgit\\.org|hub.fastgit.org)/.*/.*/.*","i");

function raw (link) {
		Re.test(link)?exec("wget " + link.replace("raw.githubusercontent.com", "raw.fastgit.org"), function (err, stdout, srderr) {
				err?console.log("Oops, there's been a mistake! \n\n" + srderr):console.log("It seems that the speed is still good");
		}):console.log("Parsing error :(");
}

module.exports = raw;
