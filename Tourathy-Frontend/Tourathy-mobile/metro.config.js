const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'cjs', 'mjs'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
    unstable_enableBridgeless: false,
  },
  transformer: {
    babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
    minifierConfig: {
      keep_classnames: true,
      keep_fnames: true,
    },
  },
  server: {
    port: 8081,
    useGlobalHotkey: true,
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        return middleware(req, res, next);
      };
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);