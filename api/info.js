const bookInfoProcessor = require('../src/index')
const { validURL } = require('../src/utils')

async function handler(request, response) {
  const { url } = request.query;
  try {
    const isValid = validURL(url)
    if(!isValid) throw Error()
    const result = await bookInfoProcessor(url)
    console.log(result)
    response.status(200).send(result);
  } catch {
    response.status(400).send();
  }
}

module.exports = handler