import registry from './registry.json'
import { version } from '../package.json'
import { Command } from 'commander/esm.mjs'
import chalk from 'chalk'
import { oraPromise } from 'ora'
// import progress from 'progress'
import inquirer from 'inquirer'

import git from './git.js'

const createProject = async (typeUrl, dir) => {
  console.log(chalk.green(`Creating ${dir} from ${typeUrl} ...`))
  await oraPromise(
    (ora) => {
      return git(`git clone ${typeUrl} ${dir} && cd ${dir} && rm -rf .git`)
    },
    {
      text: chalk.blue('creating...'),
      successText: chalk.green('created successfully!'),
      failText: chalk.red('create failed!'),
    }
  ).catch((err) => {
    console.log(chalk.red(err))
    process.exit(1)
  })
}

const program = new Command()

program.version(
  chalk.gray(`bore-cli ${version}`),
  '-v, --version',
  'output current version of bore-cli'
)

program
  .command('create')
  .argument('[dir]')
  .alias('c')
  .description('create a project')
  .option('-t, --type [h5|mini]', 'create a project with specified type')
  .option('-g, --git <url>', 'create a project template from a git registry')
  .action((dir, options) => {
    console.log(dir)
    console.log(options)
    const { type, git } = options
    if (dir) {
      if (git) {
        
      }
    } else {

    }
  })
  .usage('[dir] [<-t|--type> h5|mini] [[-g|--git] <url>]')

program.helpOption('-h, --help', 'display help for bore-cli')

program.parse(process.argv)
