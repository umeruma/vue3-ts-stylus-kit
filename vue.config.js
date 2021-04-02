// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/**
 *  @typedef { import("@vue/cli-service").ProjectOptions } Options
 *  @type { Options }
 */
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'stylus',
      'patterns': [
        path.resolve(__dirname, './src/assets/style/mixin/*.styl'),
      ]
    }
  },
  chainWebpack: config => {
    // LINK: https://github.com/oliverfindl/vue-svg-inline-loader
    config
      .module
        .rule("vue")
          .use("vue-svg-inline-loader")
            .loader("vue-svg-inline-loader")
            .options({
              md5: false,
              xhtml: false,
              svgo: false,
             });
  }
}
