const test = require('./testRoute');
const http = require('http');

http.createServer(test.handleRequest).listen(3000);
