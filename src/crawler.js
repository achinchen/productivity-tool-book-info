const fetch = require('node-fetch');

async function getHTML(url) {
  try {
    const response = await fetch(url)
    const html = await response.text();
    return html
  } catch (err) {
    console.error(err);
  };
};

module.exports = getHTML