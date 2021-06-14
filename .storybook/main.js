const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)
const ROOT = path.resolve(__dirname, '../')
const SRC = `${ROOT}/src`

/**
 * @type {import('@storybook/react/types').StorybookConfig}
 */
module.exports = {
  stories: ['../packages/**/*.stories.tsx'],
  // core: {
  //   builder: 'webpack5',
  //   disableWebpackDefaults: true,
  // },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs/register',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // reactOptions: {
  //   fastRefresh: true,
  //   strictMode: false,
  // },
  // typescript: {
  //   check: false,
  //   reactDocgen: false,
  // },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@material-ui/core': toPath('node_modules/@material-ui/core'),
      // Must have this bcs issue about providing EnTheme and load styled components
      '@emotion/core': toPath('node_modules/@emotion/react'),
      '@emotion/styled': toPath('node_modules/@emotion/styled'),
    }

    // config.module.rules.push(
    //   {
    //     test: /\.tsx?$/,
    //     loader: require.resolve('babel-loader'),
    //   },
    //   {
    //     test: /\.stories\.tsx?$/,
    //     loaders: [
    //       {
    //         loader: require.resolve('@storybook/source-loader'),
    //         options: { parser: 'typescript' },
    //       },
    //     ],
    //     enforce: 'pre',
    //   },
    // );

    // config.resolve.extensions.push('.ts', '.tsx', 'js', '.mjs');
    // // config.resolve.modules.push(__dirname + '/packages/ui', 'node_modules');
    // config.resolve.modules.push(SRC, 'node_modules');

    return config
  },
  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
        'preset-react-jsx-transform', // Can name this anything, just an arbitrary alias to avoid duplicate presets'
      ],
    ],
  }),
}
