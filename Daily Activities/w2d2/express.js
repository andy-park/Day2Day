const express = require('express');
const app = express();

const PORT = 3000;

app.use((request, response) => {
  // look for file on file system
  // load that file with fs.
})
// Or
app.use(express.static('public'));
// Moved image into 'public' directory

response.render('index', {
    agent: request.headers['user agent']
}


// Middleware looks like the below code
app.get('/',(req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, ()=> {
  console.log('Example app listening on port 3000!');
});

// Locals
app.use((request, response, next =>) {
  res.locals.agent = req.headers['user-agent'];
  next();
});