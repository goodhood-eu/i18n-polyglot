import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: 'lib/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: 'lib/*' }),
    peerDepsExternal(),
    babel({ exclude: /node_modules/ }),
    resolve({ browser: true, extensions: ['.js', '.jsx', '.json'] }),
  ],
};
