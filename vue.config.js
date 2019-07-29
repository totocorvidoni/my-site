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
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  }
};
