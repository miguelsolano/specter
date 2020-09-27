const log = console.log;
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const constants = require('../constants');
const { http } = require('../constants/axios');
const {Command, flags} = require('@oclif/command')

class DaemonRestartCommand extends Command {
  static args = [
    {
      name: 'serverId',
      required: true,
      description: 'Forge ID for server containing the daemon to restart.'
    },
    {
      name: 'daemonId',
      required: true,
      description: 'Forge ID for daemon to restart.'
    }
  ]

  async run() {
    const spinner = ora('Retrieving DaemonRestart...').start();
    const {args} = this.parse(DaemonRestartCommand)
    await new Promise(resolve => setTimeout(resolve, 1000));
    const daemonsResponse = await http.post(`${constants.API_ROOT}/servers/${args.serverId}/daemons/${args.daemonId}/restart`);
    const daemons = daemonsResponse.data;

    console.log(daemons);
    spinner.stop();
  }
}

DaemonRestartCommand.description = 'Restart daemon on server.';

module.exports = DaemonRestartCommand;
