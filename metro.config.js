/*
 * @Description: description
 * @Date: 2022-01-12 15:29:14
 * @LastEditors: maicq
 * @LastEditTime: 2022-01-13 14:30:32
 */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true
      }
    })
  }
}
