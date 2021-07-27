#!/usr/bin/env node

const registry = require('./registry.json')
const {
  version
} = require('./package.json')
const {
  program
} = require('commander')
const download = require('download-git-repo')
const progress = require('process')
const chalk = require('chalk')
const ora = require('ora')
const inquirer = require('inquirer')

const createProject = (typeUrl, dir) => {
  console.log(typeUrl)
  console.log(dir)
  console.log(chalk.blueBright(`creating "${dir}" project template...`))
  // const loading = ora(chalk.blue('processing...'))
  // loading.start()
  download(typeUrl, dir, {clone: true}, err => console.log(err))
  // download(typeUrl, dir, {
  //   clone: true
  // }, err => {
  //   if (err) {
  //     loading.fail(chalk.redBright(`Error: ${JSON.stringify(err)}`))
  //     process.exit(1)
  //   } else {
  //     loading.succeed(chalk.greenBright(`created "${dir}" success! Enjoy Coding!`))
  //     console.log(chalk.yellowBright(`Hint: "cd ${dir} && yarn" or "cd ${dir} && npm install" to install dependence if necessary`))
  //   }
  // })
}


program
  .name('bore')
  .command('create [project_name]')
  .alias('c')
  .description('create a project template')
  .option('-t, --type [h5|mini]', 'create a specified project template')
  .option('-g, --git <url>', 'create a project template from a git registry')
  .action(function (cmd, cmdObj) {
    if (cmd) {
      // 有create命令-自定义创建模式
      if (cmd !== 'create' && cmd !== 'c') {
        // 命令不正确的情况下输出报错信息
        console.log(chalk.redBright(`Error: no command "${cmd}" found! You can run "bore -h" to see more detail.`))
        process.exit(1)
      } else {
        // 命令正确的情况下
        const {
          args,
          type
        } = cmdObj
        if (type) {
          // 指定类型的情况下
          if (cmdObj.git) {
            console.log(chalk.redBright(`Error: can' create project with a specified type from git registry`))
            process.exit(1)
          }
          if (typeof type === 'boolean' && type) {
            // 未指定类型-选择类型
            inquirer.prompt([{
              name: 'projectType',
              type: 'list',
              message: 'which template you will choose?',
              choices: ['h5', 'mini']
            }]).then(answer => {
              const {
                projectType
              } = answer
              const typeUrl = registry[projectType]
              const dir = args[1]
              if (dir) {
                // 有创建目录名的情况
                createProject(typeUrl, dir)
              } else {
                // 无创建目录名
                inquirer.prompt([{
                  name: 'projectName',
                  message: chalk.grey('input a project name:')
                }]).then(answer => {
                  const {
                    projectName
                  } = answer
                  createProject(typeUrl, projectName)
                })
              }
            })
          } else {
            const typeUrl = registry[type]
            if (typeUrl) {
              const dir = args[1]
              if (dir) {
                // 有创建目录名的情况
                createProject(typeUrl, dir)
              } else {
                // 无创建目录名
                inquirer.prompt([{
                  name: 'projectName',
                  message: chalk.grey('input a project name:')
                }]).then(answer => {
                  const {
                    projectName
                  } = answer
                  createProject(typeUrl, projectName)
                })
              }
            } else {
              console.log(chalk.redBright(`Error: no "${type}" type found! Choose a type from [h5|mini]`))
              process.exit(1)
            }
          }
        } else {
          const dir = args[1]
          if (cmdObj.git) {
            if (dir) {
              createProject(cmdObj.git, dir)
            } else {
              // 无创建目录名
              inquirer.prompt([{
                name: 'projectName',
                message: chalk.grey('input a project name:')
              }]).then(answer => {
                const {
                  projectName
                } = answer
                // 未指定类型-选择类型
                createProject(cmdObj.git, projectName)
              })
            }
          } else {
            if (dir) {
              // 有创建目录名的情况
              inquirer.prompt([{
                name: 'projectType',
                type: 'list',
                message: 'which template you will choose?',
                choices: ['h5', 'mini']
              }]).then(answer => {
                const {
                  projectType
                } = answer
                createProject(registry[projectType], dir)
              })
            } else {
              // 无创建目录名
              inquirer.prompt([{
                name: 'projectName',
                message: chalk.grey('input a project name:')
              }]).then(answer => {
                const {
                  projectName
                } = answer
                // 未指定类型-选择类型
                inquirer.prompt([{
                  name: 'projectType',
                  type: 'list',
                  message: 'which template you will choose?',
                  choices: ['h5', 'mini']
                }]).then(answer => {
                  const {
                    projectType
                  } = answer
                  createProject(registry[projectType], projectName)
                })
              })
            }
          }
        }
      }
    } else {
      // 无create命令
      console.log(chalk.redBright(`Error: no command found! You can run "bore -h" to see more detail.`))
    }
  })
  .usage("[project_name] [<-t|--type> h5|mini] [[-g|--git] <url>]")
  .helpOption('-h, --help', 'display help for bore-cli')
  .version(chalk.gray(`bore-cli ${version}`), '-v, --version', 'output current version of bore-cli')
  .parse(process.argv)