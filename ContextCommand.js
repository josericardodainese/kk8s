import inquirer from 'inquirer'
import shelljs from 'shelljs'
import chalk from 'chalk';

import { getContexts } from './lib/kubectl.js';

shelljs.config.silent = true;

export default async () => {
    const contexts = getContexts();
    if (contexts.length) {
        const contextToSet = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: 'Select the context you want to use?',
                choices: contexts,
                default: contexts[0]
            }]);

        const resultCommand = shelljs.exec(`kubectl config use-context ${contextToSet.answer}`);

        console.log(chalk.green(resultCommand))

        const resultCommandClusterInfo = shelljs.exec(`kubectl cluster-info`);

        console.log(chalk.green(resultCommandClusterInfo))

    }
};
