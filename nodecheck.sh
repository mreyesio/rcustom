#!/usr/bin/env bash
NAME="app.js" # nodejs script's name here
RUN=`pgrep -f $NAME`

if [ "$RUN" == "" ]; then
 echo "Script is not running"
 node app.js
else
 echo "Script is running"
fi
