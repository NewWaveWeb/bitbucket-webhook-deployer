# Introduction

It listens to gitlab webhook push events and pulls repositories configured in config.js

# Build & Runtime Dependencies

* nodejs >= 0.10.x
* npm >= 1.4.x

# Installation on ubuntu

* `cd any-installation-dir`
* `sudo git clone gitlab-pull-webhook-url`
* `cd gitlab-pull-webhook`
* `sudo npm install`
* `sudo npm install -g gulp`
* `sudo gulp install-ubuntu`
  * Copies config.js into the directory specified by configDir.js
  * Copies 'gitlab-pull-webhook' startup script to /etc/init
* `sudo start gitlab-pull-webhook` starts the startup script manually