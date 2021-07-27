const exec = require('child_process').exec

const git = (command) =>
  new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else if (typeof stderr !== 'string') {
        reject(stderr)
      } else {
        resolve('git clone finished!')
      }
    })
  })

module.exports = git