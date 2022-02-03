const fetch = require('node-fetch')
const { argv } = require('process');
const argumentURL = argv[2]

async function getHTML(url = argumentURL) {
  try {
    const response = await fetch(url);
    const body = await response.text();
    return body
  } catch (err) {
    console.error(err);
  };
};


module.exports = {
  getHTML
}