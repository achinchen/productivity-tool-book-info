const fetch = require('node-fetch');

async function getHTML(url) {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'text/html',
      }
    });
    const body = await response.text()
    return body
  } catch (err) {
    console.error(err);
  };
};

module.exports = {
  getHTML
}