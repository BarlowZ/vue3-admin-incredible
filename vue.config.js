/*
 * @Descripttion:
 * @version: 1.5
 * @Author: qian
 * @Date: 2022-05-11 12:32:35
 * @LastEditors: qian
 * @LastEditTime: 2022-05-11 12:36:54
 */
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  configureWebpack: config => {
    config.plugins.push(AutoImport({
        resolvers: [ElementPlusResolver()]
      })
    )
    config.plugins.push(Components({
      resolvers: [ElementPlusResolver()]
    }))
  }
}
