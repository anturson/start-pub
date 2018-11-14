import express from 'express';
import { resolve } from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
    { id: 2, firstName: "Tammy", lastName: "Norton", email: "tammy@gmail.com" },
    { id: 3, firstName: "Tina", lastName: "Lee", email: "tina@gmail.com" },
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    open(`http://localhost:${port}`);
  }
});
