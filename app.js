#!/usr/bin/env node
const chalk = require('chalk');
const commander = require('commander');
const download = require('./src/download');

commander
  .command('init <name>')
  .description('init')
  .action(name => {
    if (!name) {
      console.log(chalk.red('one param required.'));
      process.exit(1);
    }
    download(name);
});
commander.parse(process.argv);
