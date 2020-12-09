#!/usr/bin/env node

const pkg = require('./package.json')
const cmd = require('commander')
const progress = require('process')
const chalk = require('chalk')

console.log(pkg.version)
console.log('test')