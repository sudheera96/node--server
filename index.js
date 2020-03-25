const http = require('http');

const hostname = process.env.hostname || '192.168.0.21';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello,This is Sri Sudheera Chitipolu.');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const http = require('http');
// const PORT = process.env.PORT || 5000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(PORT, () => {
//   console.log(`Server running on ${PORT}/`);
// });