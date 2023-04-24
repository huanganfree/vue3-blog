module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/my-project/blog/' : '/',
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
  }
}