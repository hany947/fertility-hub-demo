const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/validation-key.txt') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ac6433b46e8391a7ad7e568fb0118f'); // الكود الخاص بك
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000);
