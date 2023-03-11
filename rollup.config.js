import babel from 'rollup-plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';


export default [
  {

    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: "cjs",

      },
      {
        file: 'dist/index.es.js',
        format: "es",
        exports: "named"

      }


    ],
    plugins: [
      babel({
        exclude: 'node_modules',
        presets: ['@babel/preset-react']
      }),
      external(),
      [nodeResolve()]

    ]
  }
]

