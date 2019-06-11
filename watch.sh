#!/bin/bash

watchify -t [ babelify --presets [ @babel/preset-env @babel/preset-react ] --plugins [ transform-class-properties ] ] js/main.js -o js/bundle.js
