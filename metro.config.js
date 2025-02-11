const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  config.resolver.extraNodeModules = {
    "@env": require("path").resolve(__dirname, "./node_modules/@env")
  };
  return config;
})();
