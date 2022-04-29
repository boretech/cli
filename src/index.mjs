import { version } from '../package.json'
import registry from '../registry.json'
import { Command } from 'commander/esm.mjs'
import chalk from 'chalk'
import { oraPromise } from 'ora'
import inquirer from 'inquirer'

import { git } from './utils/index.mjs'

const createProject = async (typeUrl, dir) => {
  console.log(chalk.blue(`Creating ${dir} from ${typeUrl} ...`))
  await oraPromise(
    (ora) => git(`git clone ${typeUrl} ${dir} && cd ${dir} && rm -rf .git`),
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

program.usage('<create|c> [dir] [<-t|--type> h5|mini] [[-g|--git] <url>]')

program
  .command('create')
  .argument('[dir]')
  .alias('c')
  .description('create a project')
  .option('-t, --type [h5|mini]', 'create a project with specified type')
  .option('-g, --git <url>', 'create a project template from a git registry')
  .action(async (dir, options) => {
    const { type, git } = options
    if (dir) {
      if (git) {
        if (type) {
          console.log(
            chalk.yellow(`ignore type option, use git registry instead`)
          )
        }
        await createProject(git, dir)
        process.exit(0)
      } else {
        if (type && typeof type === 'string') {
          await createProject(registry[type], dir)
          process.exit(0)
        } else {
          const selectType = await inquirer.prompt([
            {
              type: 'list',
              name: 'type',
              message: 'Select a project type',
              choices: Object.keys(registry),
            },
          ])
          await createProject(registry[selectType.type], dir)
          process.exit(0)
        }
      }
    } else {
      const project = await inquirer.prompt([
        {
          type: 'input',
          name: 'dir',
          message: 'Input project directory name',
        },
      ])

      if (type && typeof type === 'string') {
        await createProject(registry[type], project.dir)
        process.exit(0)
      } else {
        const selectType = await inquirer.prompt([
          {
            type: 'list',
            name: 'type',
            message: 'Select a project type',
            choices: Object.keys(registry),
          },
        ])
        await createProject(registry[selectType.type], project.dir)
        process.exit(0)
      }
    }
  })

program.helpOption('-h, --help', 'display help for bore-cli')

program.parse(process.argv)