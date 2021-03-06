const { defineConfig } = require('@vue/cli-service')
const { merge } = require("webpack-merge")
const tsImportPluginFactory = require("ts-import-plugin")
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir);
module.exports = defineConfig({
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  transpileDependencies: true,
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,//关闭eslint
  chainWebpack: config => {
    // 让ts支持vant
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
    // 引入less
    const oneOfsMap = config.module.rule("less").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("style-resources-loader")
        .loader("style-resources-loader")
        .options({
          // or an array : ["./path/to/vars.less", "./path/to/mixins.less"] 这里的路径不能使用@，否则会报错
          patterns: "./src/style/style.less"
        })
        .end()
    });
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
  },
  devServer: {
    // host: '127.0.0.1',//如果你想让你的服务器可以被外部访问
    // open: true,//跑起来是否打开浏览器
    port: 80,//默认端口号
    proxy: {
      '/test': {
        target: 'https://p.3.cn/',
        changOrigin: true,//允许跨域
        // ws: true, // 是否启用websockets
        secure: false,//默认为true，是否需要携带安全证书，即https时，是需要的，设置成false就不用了
        pathRewrite: {
          '^/test': '',//重写路径
        }
      },
      '/bbq': {
        target: 'https://biaobaiqiang.vip',
        changOrigin: true,//允许跨域
        // ws: true, // 是否启用websockets
        secure: false,//默认为true，是否需要携带安全证书，即https时，是需要的，设置成false就不用了
        pathRewrite: {
          '^/bbq': '',//重写路径
        }
      },
    }
  }
})
