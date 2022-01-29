const cheerio = require('cheerio')
const OpenCC = require('opencc')

const converter = new OpenCC('s2t.json')

const SELECTOR = {
  Name: '.bookInfo_right_header_title',
  Image: '.wr_bookCover_img',
  Author: '.bookInfo_author',
  Intro: '.bookInfo_intro',
  Date: '.introDialog_content_pub_line'
}

const NEW_LINE = '\n'
const YEAR = '年'
const DATE_REGEX = /\d{4}\W\d/

function getInfo (rawInfo) {
  return rawInfo.replace(NEW_LINE, '').trim()
}

function getDate (rawData) {
  const date = rawData.match(DATE_REGEX)
  if(!date) return ''
  return date[0].split(YEAR)
}

async function translateTraditionalChinese (dataObject) {
  let result = {...dataObject}
  const data = Object.entries(dataObject)

  for(let [key, value] of data) {
    result[key] = await converter.convertPromise(value)
  }

  return result
}

async function getBookInfo(html) {
  const $ = cheerio.load(html)
  const name = $(SELECTOR.Name).text()
  const author = $(SELECTOR.Author).text()
  const image = $(SELECTOR.Image).attr('src')
  const intro = getInfo($(SELECTOR.Intro).text())
  const date = getDate($(SELECTOR.Date).text())
  const convertedResult = await translateTraditionalChinese({
    name,
    author,
    intro
  })

  return Object.assign(convertedResult, {image, date})
}

module.exports = getBookInfo