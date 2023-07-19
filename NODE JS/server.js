const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello my name is ASIT PAL ');
});


server.listen(4000);
