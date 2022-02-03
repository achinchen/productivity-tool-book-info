function validUrl(url) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}


function getTargetUrl (rawUrl) {
  return rawUrl.replace('/?url=', '')
}


module.exports = {
  validUrl,
  getTargetUrl
}
