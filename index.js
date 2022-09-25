#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import shelljs from 'shelljs'


import ContextCommand from './ContextCommand.js';

shelljs.config.silent = true;

console.log(
    chalk.yellow(
        figlet.textSync('KK8S', { horizontalLayout: 'full' })
    )
);

ContextCommand();