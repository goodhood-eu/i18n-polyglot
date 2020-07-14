import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import path from 'path';
import globImport from 'rollup-plugin-glob-import';
import camelCase from 'lodash/camelCase';
import copy from 'rollup-plugin-copy';
import upperFirst from 'lodash/upperFirst';
import acornJsx from 'acorn-jsx';


const toFileExtension = (filepath, ext) => {
  const { dir, name } = path.parse(filepath);

  return path.join(dir, `${name}.${ext}`);
};

export default (pkg, pkgPath) => ({
  input: 'src/index.jsx',
  acorn: { jsx: true },
  acornInjectPlugins: [acornJsx()],
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    del({
      targets: [
        path.join(pkgPath, 'lib/*'),
        path.join(pkgPath, 'styles.css'),
      ],
    }),
    alias({
      entries: [
        { find: '@', replacement: pkgPath },
        { find: '@root', replacement: ROOT_PKG_PATH },
      ],
    }),
    peerDepsExternal(),
    postcss({
      extract: true,
      modules: true,
      use: [['sass', {
        includePaths: [
          path.join(pkgPath, 'node_modules/'),
          path.join(ROOT_PKG_PATH, 'node_modules/'),
        ],
        functions: sassFunctions({ sass }),
        sourceComments: true,
      }]],
      plugins: [
        postcssPresetEnv(),
      ],
    }),
    babel({
      babelHelpers: 'runtime',
      rootMode: 'upward',
      exclude: [
        path.join(pkgPath, 'node_modules/'),
        path.join(ROOT_PKG_PATH, 'node_modules/'),
      ],
    }),
    resolve({ browser: true, extensions: ['.js', '.jsx', '.json'] }),
    globImport({
      format: 'mixed',
      rename: (name, id) => {
        if (name) return name;
        if (/index\.js(x?)$/.test(id)) {
          const dirname = path.basename(path.dirname(id));
          return upperFirst(camelCase(dirname));
        }

        // not supported
        return null;
      },
    }),
  ],
});
