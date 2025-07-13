module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ha-project/blog/' : '/',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      title: 'vue3-express'
    }
  },
  // configureWebpack: {
  //   resolve: {
  //     // extension:[], //内部已默认配置
  //     alias: {
  //       // router和store不需要配置，因为可以通过$获取。
  //       '@':'src/', //内部已默认配置
  //     }
  //   }
  // }
}