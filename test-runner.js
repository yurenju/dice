const shell = require('shelljs');
const server = require('./dev-server');

server(() => {
  const cmd = './node_modules/.bin/cucumberjs';
  const options = JSON.stringify({ snippetInterface: 'promise' });
  shell.exec(`${cmd} --format-options '${options}'`, code => shell.exit(code));
});
