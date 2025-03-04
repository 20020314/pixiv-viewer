module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '././'
    : '/',
  chainWebpack: config => {
    config
      .module
      .rule('vue')
      .use('vue-loader')
      .tap(args => {
        args.compilerOptions.whitespace = 'preserve'
      })
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ['*'],
            selectorBlackList: ['van']
          })
        ]
      }
    },
    sourceMap: true
  },
  devServer: {
    disableHostCheck: true
  },
  lintOnSave: false,
  runtimeCompiler: true,
}
