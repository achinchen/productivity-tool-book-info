const bookInfoProcessor = require('../src/index')
const validURL = require('../src/validURL')

async function handler(request, response) {
  const { url } = request.query;
  try {
    const isValid = validURL(url)
    if(!isValid) throw Error()
    await bookInfoProcessor(url)
    response.status(204).send();
  } catch {
    response.status(400).send();
  }
}

module.exports = handler