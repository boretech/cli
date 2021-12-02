import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'esm',
  },
  plugins: [
    json(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      presets: [
        '@babel/preset-env',
      ],
      // babelHelpers: true,
      exclude: 'node_modules/**',
    }),
  ],
}
