const { getHTML } = require('./crawler') 
const { getBookInfo } = require('./weread-parser')
// const { createReadNote } = require('./notion-integration') 

async function bookInfoProcessor(url) {
  const rawHtml = await getHTML(url)
  const result = await getBookInfo(rawHtml)
  return result
  // await createReadNote(result)
}

module.exports = bookInfoProcessor