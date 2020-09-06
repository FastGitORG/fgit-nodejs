var exec = require('child_process').exec,
    Git = "git";

function send (data) {
    for (var i = 2;i < data.length;i++) {
	Git += " " + data[i];
    }
    console.log("The command is equivalent to: " + Git + "\n")
    exec(Git, function (err, stdout, srderr) {
	err?console.log(srderr):console.log(`${srderr}

${stdout}`);
    })
}

function git (data) {
    send(data);
}

module.exports = git;
