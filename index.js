#!/usr/bin/env node

const {
  version
} = require('./package.json')
const {
  program
} = require('commander')
const progress = require('process')
const chalk = require('chalk')
const ora = require('ora')
const inquirer = require('inquirer')



// const loading = ora(chalk.blue('正在处理'))

// loading.start()

// setTimeout(() => {
//   loading.succeed(chalk.green('成功！'))
// }, 5000)




program.version(chalk.gray(`bore-cli ${version}`), '-v, --version', 'output current version of bore-cli').parse(process.argv)