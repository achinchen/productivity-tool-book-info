const { createBookInfo } =  require('./createBookInfo')
const { validUrl } = require('./utils')
const { send } = require('micro')

const app = async (request, response) => {
  try {
    const { url } = request.query
    const isValid = validUrl(url)
    if(!isValid) throw Error()
    await createBookInfo(url)
    send(response, 204)
  } catch {
    send(response, 400)
  }
}
module.exports = app