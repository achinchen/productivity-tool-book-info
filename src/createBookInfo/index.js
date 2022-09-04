const { getHTML } = require('./crawler') 
const { getBookInfo } = require('./wereadParser')
const { createReadNote } = require('./notionIntegration') 

async function createBookInfo(url) {
  const html = await getHTML(url)
  const result = await getBookInfo(html)
  await createReadNote({...result, url})
}

module.exports = {
  createBookInfo
}