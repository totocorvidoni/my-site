module.exports = {
  publicPath: "/my-site/",
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/_variables.scss";'
      }
    }
  }
};
