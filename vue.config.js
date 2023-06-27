const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-router-pinia-typescript/' : '/',
  transpileDependencies: ['pinia'],
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
      },
    },
  },
})
