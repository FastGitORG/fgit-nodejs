const exec = require('child_process').exec;

module.exports = (options) => {
  let command = 'git';
  for (let i = 2; i < options.length; i++) {
    command += ' ' + options[i];
  }

  exec(command, (err, stdout) => {
    if (err) {
      console.log(err);
    } else {
      console.log(stdout);
    }
  });
};
