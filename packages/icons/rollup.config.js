import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import inlineSvg from 'rollup-plugin-inline-svg';

import pkg from './package.json';

const config = {
  input: 'index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    postcss({ extract: true, plugins: [autoprefixer] }),
    inlineSvg(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [
        '@babel/plugin-proposal-export-default-from',
      ],
    }),
    localResolve(),
    resolve(),
    commonjs(),
    filesize(),
  ],
};

export default config;
