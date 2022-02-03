const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { argv } = require('process');
const url = argv[2]

async function getHTML() {
  try {
    const { stdout } = await exec(`curl ${url}`);
    return stdout
  } catch (err) {
    console.error(err);
  };
};


module.exports = {
  getHTML
}