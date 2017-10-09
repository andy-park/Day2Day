const http = require('http');

http.get('http://api.github.com', )

res.setEncoding('utf8');

// Event handler is a function that gets called every time an event by the given name occurs.


// The 'end' event happens after the last 'data' event

res.on('end', ()=> {
  // Use JSON.parse to turn the string of rawData into a JavaScript objecr
  const parsedData = JSON.parse(rawData);
}