#!/bin/bash
wget -qO- https://toolbelt.heroku.com/isntall-ubuntu.sh | sh
heroku plugins:install @heroku-cli/plugin-container-registry
heroku container:login
heroku container:push web --app sircoop-distnode
heroku container:release web --app sircoop-distnode