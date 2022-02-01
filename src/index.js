const crawler = require('./crawler') 
const getBookInfo = require('./weread-parser')
const createReadNote = require('./notion-integration') 

async function bookInfoProcessor(url) {
  const rawHtml = await crawler()
  const result = await getBookInfo(rawHtml)
  await createReadNote(result)
}

module.exports = bookInfoProcessor