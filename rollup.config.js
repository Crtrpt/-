const rollup = require('rollup');
import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import typescript from 'rollup-plugin-typescript2';
import sourcemaps from 'rollup-plugin-sourcemaps';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
// import multi from '@rollup/plugin-multi-entry';
import { wasm } from '@rollup/plugin-wasm';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import commonjs from '@rollup/plugin-commonjs';


const env = process.env.NODE_ENV

export default {
  input: [
    'src/main.ts',
  ],
  output:[
    {
      sourcemap: true,
      // file: 'example/js/bundle.js',
      dir: "public/js/module",
      format:"es",
      name:"dystopia"
    }
  ],
  plugins: [
    commonjs(),
    wasm(),
    image(),
    // multi(),

    scss(
      {
        output: 'public/css/bundle.css',
        sourceMap: true,
        sourceMapEmbed: true,
        include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
        failOnError: true,
        watch: 'src/',
      }
    ),
    sourcemaps(),
    typescript(),
    serve({
      contentBase:"public"
    }),
    livereload("public"),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    replace({
      preventAssignment:true,
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    dynamicImportVars({
    }),
    
  ]
};


