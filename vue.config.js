const { defineConfig } = require('@vue/cli-service')
const { merge } = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
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
    })
  },
})
