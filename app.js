const http = require('http');
const express = require('express');

global.BASE_PATH = __dirname;

const app = express();

app.use(function(req, res) {
      return res.sendFile(path.resolve(global.BASE_PATH, 'public/index.html'));
});

/** Create HTTP server.*/
const server = http.createServer(app);
server.listen(3334);

