# Introduction

It listens to bitbucket webhook push events and run commands for repositories configured in config.js.
Currently, it runs on GNU/Linux and BSD OSes only.

# Build & Runtime Dependencies

* nodejs >= 0.10.x
* npm >= 1.4.x

# Installation

* `cd any-installation-dir`
* `git clone https://github.com/NewWaveWeb/bitbucket-webhook-deployer.git `
* `cd bitbucket-webhook-deployer`
* `npm install`

## config.json

* `cp config.json.example /path/to/your/config.json` then set up your repositories:
```
{
    "port" : 8889,
    "repositories" : {
        "[repository name]" : {
            "name":"[my super cool name]",
            "basepath" : "[path to where the command will run]",
            "command" : "[the command to run]",
            "branch" : "[what branch to react to]"
        }
    }
}
```

## configDir.js

* `cp configDir.js.dist configDir.js` then setup the path to your config.json file:
```
module.exports="/path/to/your/config.json";
```
 
* `node main.js` starts the startup script manually

## Setup the webhook

* Set the webhook url: `http://your.webhook.domain:port`
