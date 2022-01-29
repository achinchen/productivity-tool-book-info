const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { argv } = require('process');
const getBookInfo = require('./utils')
const url = argv[2]

async function getHTML() {
  try {
    const { stdout } = await exec(`curl ${url}`);
    const result = await getBookInfo(stdout)
    console.log(result)
  } catch (err) {
    console.error(err);
  };
};

getHTML();