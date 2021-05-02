const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

module.exports = (link) => {
  const savePath = path.join(process.cwd(), path.basename(link));
  const tmpSavePath = savePath + '.tmp';

  const fileStream = fs.createWriteStream(tmpSavePath)
      .on('error', (err) => {
        console.error(err);
      })
      .on('ready', () => {
        console.log('Downloading');
      })
      .on('finish', () => {
        fs.renameSync(tmpSavePath, savePath);
        console.log('Download complete :)');
      });

  fetch(link
      .replace(/^(http(s)?):\/\/(www\.)?github\.com/, 'https://hub.fastgit.org')
      .replace(/^(http(s)?):\/\/raw\.githubusercontent\.com/, 'https://raw.fastgit.org')
  , {
    method: 'GET',
    headers: {'Content-Type': 'application/octet-stream'},
  }).then((res) => {
    res.body.pipe(fileStream);
  }).catch((err) => {
    console.log(err);
  });
};
