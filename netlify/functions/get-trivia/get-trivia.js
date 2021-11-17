const fetch = require('node-fetch')

async function getData() {
  let randomNumber = Math.floor(Math.random() * 20);
  let response = await fetch(`https://swapi.dev/api/people/${randomNumber}`);
  let data = await response.json();
  return data
}


const handler = async () => {
  try {
    let res = await getData();
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
