import json from '@rollup/plugin-json'
import { uglify } from "rollup-plugin-uglify"

const isDev = process.env.NODE_ENV === 'development'

const basePlugins = [json()]

const devPlugins = []

const prodPlugins = [
  uglify()
]

const plugins = [...basePlugins].concat(isDev ? devPlugins : prodPlugins)

export default {
  input: 'src/index.mjs',
  external: ['fs', 'child_process', 'commander/esm.mjs', 'chalk', 'ora', 'inquirer'],
  output: {
    file: 'dist/index.mjs',
    format: 'esm'
  },
  plugins
}