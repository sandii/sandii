#!/usr/bin/env node
const chalk = require('chalk');
const commander = require('commander');
const ask = require('./src/ask');
const download = require('./src/download');

commander
  .command('init')
  .action(async () => {
    const { name, type } = await ask();
    if (!name) {
      console.log(chalk.red('Project name required.'));
      process.exit(1);
    }
    if (!type) {
      console.log(chalk.red('Template type required.'));
      process.exit(1);
    }
    download(name, type);
  })
  .parse();
