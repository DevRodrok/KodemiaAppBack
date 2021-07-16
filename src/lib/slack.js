
const fetch = require('node-fetch')

async function sendAdvice(url, info){
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(info)
  })
  return response
}

module.exports = {sendAdvice}