const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      ['/zy-park']: {
        target: 'http://192.168.1.103:10701',
        changeOrigin: true,
      }
    }
  }
})
