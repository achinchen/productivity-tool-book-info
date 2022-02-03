const { getHTML } = require('../crawler') 
const { getBookInfo } = require('../weread-parser')
const { createReadNote } = require('../notion-integration') 

async function createBookInfo() {
  const rawHtml = await getHTML()
  const result = await getBookInfo(rawHtml)
  await createReadNote(result)
}

module.exports = {
  createBookInfo
}