const { override, addWebpackAlias } = require("customize-cra")
const path = require('path')

const rootImport = {
  ['~']: path.resolve(__dirname, 'src')
};

module.exports = override(addWebpackAlias(rootImport))