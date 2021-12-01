import pkg from "../package.json";
import registry from "../registry.json";
import { Command } from "commander";
import chalk from "chalk";
import ora from "ora";
import inquirer from "inquirer";
import { exec } from "child_process";

const git = (command: string) =>
  new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        if (typeof stderr !== "string") {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      }
    });
  });

const createProject = (typeUrl: string, dir: string) => {
  console.log(chalk.green(`Creating project ${dir} ...`));
  const spinner = ora("Creating ...").start();
  git(`git clone ${typeUrl} ${dir} && cd ${dir} && rm -rf .git`).then((res) => {
    spinner.succeed(
      chalk.greenBright(`${dir} created successfully! Enjoy Coding!`),
    );
  }).catch((err) => {
    spinner.fail(chalk.redBright(`Error: ${JSON.stringify(err)}`));
    process.exit(1);
  });
};

const program = new Command();

program
  .command("create [project_name]")
  .alias("c")
  .description("create a new project")
  .option("-t, --type [h5|mini]", "create a specified project")
  .option("-g, --git <url>", "create a project from a git registry")
  .action((cmd, cmdObj) => {
    if (cmd) {
      if (cmd !== "create" && cmd !== "c") {
        console.log(chalk.redBright(`Error: invalid command ${cmd}`));
        process.exit(1);
      } else {
        const { args, type, git } = cmdObj;
        if (type) {
          if (git) {
            console.log(
              chalk.redBright(
                `Error: can' create project with a specified type from git registry`,
              ),
            );
            process.exit(1);
          }
        }
      }
    } else {
    }
  })
  .usage("[project_name] [<-t|--type> h5|mini] [[-g|--git] <url>]")
  .helpOption("-h, --help", "display help for bore-cli")
  .version(
    chalk.gray(`bore-cli ${pkg.version}`),
    "-v, --version",
    "output current version of bore-cli",
  )
  .parse(process.argv);
