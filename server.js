const fs = require('fs');
const path = require('path');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const binpath = path.resolve(__dirname, 'bin');

const serveFile = (app, filename) => {
  app.get('/' + filename, (req, res) => {
    res.sendFile(filename, {
      root: binpath,
    });
  });
};

function start(port) {
  const app = express();
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('short'));
  app.use(bodyParser.json());
  app.use(
    '/static',
    express.static('bin/static', {
      fallthrough: false,
      maxAge: 31536000000,
    }),
  );
  serveFile(app, 'service-worker.js');
  serveFile(app, 'manifest.json');
  app.get('/favicon.ico', (req, res) => {
    res.sendStatus(404);
  });
  app.get('*', (req, res) => {
    res.sendFile('index.html', {
      root: binpath,
    });
  });
  app.listen(port);
}

module.exports = start;
