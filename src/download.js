const chalk = require('chalk');
const dgr = require('download-git-repo');
const ora = require('ora');

const url = 'sandii/vue-template';

module.exports = name => {
  const spinner = ora('downloading..');
  spinner.start();
  dgr(url, name, {
    clone: false,
  }, err => {
    spinner.stop();
    console.log(err
      ? chalk.red(err)
      : chalk.green('success!')
    );
    process.exit(1);
  });
};
