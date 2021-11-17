---
slug: "/questions/question9"
title: "Serverless function"
---

#### Serverless function

I've deployed a serverless function that calls an external API getting some Star Wars data:

https://swapi.dev/

Here is the function's code:

```
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
```

The function can be accessible and called using the Star Wars API link in the Navbar.