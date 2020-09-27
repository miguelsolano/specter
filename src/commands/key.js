const log = console.log;
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const constants = require('../constants');
const { http } = require('../constants/axios');
const {Command} = require('@oclif/command')

class VpsCommand extends Command {
  async run() {
    const spinner = ora('Retrieving virtual service providers...').start();

    http.get(`${constants.API_ROOT}/user`).then((response) => {
      const vpsData = response.data.user;

      const providers = [];

      for(var key in vpsData) {
        if (key.includes('connected_to_') && vpsData[key] != false) {
          providers.push(key);
        }
      }

      const result = providers.map(value => {
        return value.substring('conected_to_'.length + 1).replace('_', ' ').toUpperCase();
      })

      spinner.stop();
      console.info('Linked VPS Providers: ');
      result.forEach(v => console.log(`- ${chalk.blue(v)}`))

    })
  }
}

VpsCommand.description = 'Returns the list of VPS provider registered to forge.';

module.exports = VpsCommand;
