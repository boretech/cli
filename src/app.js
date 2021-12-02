import registry from './registry.json'
import { version } from '../package.json'
// import { oraPromise } from 'ora'
import { Command } from 'commander'
import chalk from 'chalk'

const program = new Command()

console.log(registry.h5)
console.log(registry.mini)

// console.log(ora)
// const spinner = ora('Loading unicorns')
// spinner.start()

program.option('-v, --version', 'print version info')

program.parse(process.argv)

const options = program.opts()

if (options.version) {
  console.log(chalk.gray(`jishu-cli ${version}`))
}
