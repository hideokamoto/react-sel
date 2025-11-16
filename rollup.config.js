import typescript from 'rollup-plugin-typescript2';

export default {
  input: './libs/index.ts',
  output: [{
    file: './dist/index.js',
    format: 'cjs',
    exports: 'named'
  }],
  external: [
    'enzyme',
    '@testing-library/react',
    'react',
    'react-dom'
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015',
          moduleResolution: 'node'
        }
      }
    })
  ]
}