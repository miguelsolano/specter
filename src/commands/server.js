const log = console.log;
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const constants = require('../constants');
const { http } = require('../constants/axios');
const {Command, flags} = require('@oclif/command')

class ServerCommand extends Command {
  static args = [
    {
      name: 'id',
      required: true,
      description: 'Forge ID for server which you are pulling information for.'
    }
  ]

  async run() {
    const spinner = ora('Retrieving Server...').start();
    const {args} = this.parse(ServerCommand)
    await new Promise(resolve => setTimeout(resolve, 1000));

    const serverResponse = await http.get(`${constants.API_ROOT}/servers/${args.id}`);
    const daemonsResponse = await http.get(`${constants.API_ROOT}/servers/${args.id}/daemons`);
    const server = serverResponse.data.server;
    const daemons = daemonsResponse.data.daemons;

    console.log(chalk.blue(`
          SERVER
          ========================================
          ID: ${chalk.white(server.id)}
          Name: ${chalk.white(server.name)}
          Provider: ${chalk.white(server.provider)}
          Region: ${chalk.white(server.region)}
          IP: ${chalk.white(server.ip_address)}
          UP: ${chalk.white(server.is_ready)}
          PHP VERSION: ${chalk.white(server.php_version)}
          PHP CLI VERSION: ${chalk.white(server.php_cli_version)}
          SERVER SIZE: ${chalk.white(server.size)}
          ========================================
        `));

    daemons.forEach(daemon => {
      console.log(chalk.yellow(`
          DAEMON
          ------------------------------------------
          ID: ${chalk.white(daemon.id)}
          USER: ${chalk.white(daemon.user)}
          DIR: ${chalk.white(daemon.directory)}
          STATUS: ${chalk.white(daemon.status)}
          PROCESSES: ${chalk.white(daemon.processes)}
          CMD: ${chalk.white(daemon.command)}
          ------------------------------------------
      `))
    })

    spinner.stop();
  }
}

ServerCommand.description = 'Returns Server Data and Daemons.';

module.exports = ServerCommand;
