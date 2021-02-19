const chalk = require('chalk');
const dgr = require('download-git-repo');
const ora = require('ora');

module.exports = (name, type = 'vue') => {
  const spinner = ora('downloading..');
  spinner.start();
  dgr(`sandii/${type}-template`, name, {
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
