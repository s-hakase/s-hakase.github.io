module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 's-hakase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  css: [
    'mdi/css/materialdesignicons.min.css'
  ],
  /**
   * modules
   */
  modules: [
    '@nuxtjs/vuetify'
  ],
  /**
   * Customize Vuetify
   */
  vuetify: {
    // theme: {
    //   primary: '#3f51b5',
    //   secondary: '#b0bec5',
    //   accent: '#8c9eff',
    //   error: '#b71c1c'
    // }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /**
   * Watcher options
   */
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 2000
    }
  },

  generate: {
    dir: 'docs'
  }
}
