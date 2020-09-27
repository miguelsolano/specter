const log = console.log;
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const constants = require('../constants');
const { http } = require('../constants/axios');
const {Command, flags} = require('@oclif/command')

class ServersCommand extends Command {
  async run() {
    const spinner = ora('Retrieving Servers...').start();
    await new Promise(resolve => setTimeout(resolve, 1000));

    http.get(`${constants.API_ROOT}/servers`).then(response => {
      const servers = response.data.servers;
      console.log(servers);

      servers.forEach(server => {
        console.log(chalk.blue(`
          ========================================
          ID: ${chalk.white(server.id)}
          Name: ${chalk.white(server.name)}
          Provider: ${chalk.white(server.provider)}
          Region: ${chalk.white(server.region)}
          IP: ${chalk.white(server.ip_address)}
          UP: ${chalk.white(server.is_ready)}
          ========================================
        `));
      });
      spinner.stop();
    });
  }
}

ServersCommand.description = 'Pulls a list of servers associated to forge account.';

ServersCommand.flags = {
  output: flags.string({char: 'o', description: 'Output file in which to register remote servers list.'}),
};

module.exports = ServersCommand;
