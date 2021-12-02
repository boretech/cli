import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/app.js',
  output: {
    file: 'lib/index.js',
    format: 'esm',
    name: 'index',
    sourcemap: true,
  },
  plugins: [
    json(),
    resolve({
      include: 'node_modules/**',
    }),
    commonjs(),
  ],
  external: ['ora'],
}
