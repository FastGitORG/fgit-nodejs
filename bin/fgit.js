#!/usr/bin/env node

const git = require('./../lib/git');
const dl = require('./../lib/download');
const exec = require('child_process').exec;
const argv = process.argv;

if (argv[2] == 'clone') {
  let k = '';

  for (i = 2; i < argv.length; i++) {
    k += ' ' + argv[i].replace(/^(http(s)?|git):\/\/github\.com/, 'https://hub.fastgit.org');
  }

  console.log('Downloading...');
  exec('git' + k, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Download complete! :)');
    }
  });
} else if (argv[2] == 'raw') {
  if (argv[3]) {
    dl(argv[3]);
  } else {
    console.log('Need a raw.githubusercontent.com link.');
  }
} else if (argv[2] == 'dl') {
  if (argv[3]) {
    dl(argv[3]);
  } else {
    console.log('Need a github Releases link.');
  }
} else if (!argv[2]) {
  console.log(`Welcome to fgit-nodejs!
Made by lihai2333

help:
\`fgit clone <Git warehouse link>\`
Additional options:
\`fgit raw\` Speed up raw.githubusercontent.com download
\`fgit dl\` Speed up github Releases download

Version: 1.1.6`);
} else {
  git(argv);
}
