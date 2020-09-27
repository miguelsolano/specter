specter
=======

A CLI utility to create and manage servers on forge

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/specter.svg)](https://npmjs.org/package/specter)
[![Downloads/week](https://img.shields.io/npm/dw/specter.svg)](https://npmjs.org/package/specter)
[![License](https://img.shields.io/npm/l/specter.svg)](https://github.com/miguelsolano-mwi/specter/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g specter
$ specter COMMAND
running command...
$ specter (-v|--version|version)
specter/0.0.0 darwin-x64 node-v14.4.0
$ specter --help [COMMAND]
USAGE
  $ specter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`specter help [COMMAND]`](#specter-help-command)
* [`specter init`](#specter-init)
* [`specter server ID`](#specter-server-id)
* [`specter servers`](#specter-servers)
* [`specter vps`](#specter-vps)

## `specter help [COMMAND]`

display help for specter

```
USAGE
  $ specter help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `specter init`

Generates a new specter.json and assign token in it.

```
USAGE
  $ specter init

OPTIONS
  -t, --token=token  token to save
```

_See code: [src/commands/init.js](https://github.com/miguelsolano-mwi/specter/blob/v0.0.0/src/commands/init.js)_

## `specter server ID`

Pulls a list of servers associated to forge account.

```
USAGE
  $ specter server ID

ARGUMENTS
  ID  Forge ID for server which you are pulling information for.

OPTIONS
  -o, --output=output  Output file in which to register remote servers list.
```

_See code: [src/commands/server.js](https://github.com/miguelsolano-mwi/specter/blob/v0.0.0/src/commands/server.js)_

## `specter servers`

Pulls a list of servers associated to forge account.

```
USAGE
  $ specter servers

OPTIONS
  -o, --output=output  Output file in which to register remote servers list.
```

_See code: [src/commands/servers.js](https://github.com/miguelsolano-mwi/specter/blob/v0.0.0/src/commands/servers.js)_

## `specter vps`

Returns the list of VPS provider registered to forge.

```
USAGE
  $ specter vps
```

_See code: [src/commands/vps.js](https://github.com/miguelsolano-mwi/specter/blob/v0.0.0/src/commands/vps.js)_
<!-- commandsstop -->
