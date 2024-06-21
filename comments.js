// Create a web server
// 1. Create a web server
// 2. When user visits localhost:3000, display "Hello World!"
// 3. When user visits localhost:3000/comments, display "Comments Page"

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.end('Comments Page');
  } else {
    res.end('Hello World!');
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Server is running on http://localhost:3000');
});