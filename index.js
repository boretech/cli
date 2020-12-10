#!/usr/bin/env node

const {
  version
} = require('./package.json')
const {
  program,
  alias
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

program
  .name("bore")
  .usage("bore create|c [name] [option]")
  .command('create [name]')
  .alias('c')
  .description('create a template project')
  .option('-w, --web', 'create an H5 template project')
  .option('-m, --mini', 'create a wx-mini-program template project')
  .option('-vm, --vue-mobile', 'create a mobile Vue template project with vant')
  .option('-vp, --vue-pc', 'create a PC Vue template project with element')
  .action(function (url, cmdObj) {
    console.log(url)
    console.log(cmdObj)
  })
  .helpOption('-h, --help', 'display help for bore-cli')
  .version(chalk.gray(`bore-cli ${version}`), '-v, --version', 'output current version of bore-cli')
  .parse(process.argv)