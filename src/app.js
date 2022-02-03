const { send } = require('micro')
const microCors = require('micro-cors')
const { createBookInfo } =  require('./createBookInfo')
const { validUrl } = require('./utils')

const cors = microCors()

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
module.exports = cors(app)