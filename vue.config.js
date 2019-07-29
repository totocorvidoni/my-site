module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/_variables.scss";'
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: "es",
      fallbackLocale: "es",
      localeDir: "locales",
      enableInSFC: false
    }
  }
};
