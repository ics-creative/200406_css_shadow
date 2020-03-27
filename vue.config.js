module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/20_performance.html',
      // output as dist/index.html
      filename: '20_performance.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Shadow Performance Test'
    }
  },
  outputDir: 'docs',
  publicPath: './'
}
