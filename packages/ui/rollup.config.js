import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

export default {
  input : 'index.js',
  output: [
    {
      file     : pkg.main,
      format   : 'cjs',
      exports  : 'named',
      sourcemap: true
    },
    {
      file     : pkg.module,
      format   : 'es',
      exports  : 'named',
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      extensions: ['.css']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    external(),
    url({ exclude: ['**/*.svg'] }),
    resolve(),
    commonjs()
  ]
};