const inquirer = require('inquirer');

module.exports = () => inquirer.prompt([{
  name: 'name',
  message: 'Input project name',
  default: 'test',
}, {
  name: 'type',
  message: 'Choose template type (vue|node)',
  default: 'vue',
}]);
