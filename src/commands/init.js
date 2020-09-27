const log = console.log;
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const {Command, flags} = require('@oclif/command')

class InitCommand extends Command {
  async run() {
    const {flags} = this.parse(InitCommand)
    const token = flags.token || ''
    const spinner = ora('Initializing Specter...').start();

    await new Promise(resolve => setTimeout(resolve, 1000));

    const fd = fs.createWriteStream('specter.json');

    fd.write(`{
      "token": "${token}"
    }`, () => {
      fd.close();
      spinner.stop();
    });
  }
}

InitCommand.description = 'Generates a new specter.json and assign token in it.';

InitCommand.flags = {
  token: flags.string({char: 't', description: 'token to save'}),
};

module.exports = InitCommand;
