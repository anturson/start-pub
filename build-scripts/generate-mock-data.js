/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import { schema } from './mock-data-scheme';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', () => require('faker'));

jsf.resolve(schema).then(data => {
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('./src/api/db.json', json, (err) => {
    if (err) {
      return console.log(chalk.red(err));
    }
    else {
      console.log(chalk.green('Mock data generated.'));
    }
  });
});
