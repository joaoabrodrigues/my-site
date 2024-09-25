module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":660,"showCaptions":["title"],"markdownCaptions":true,"withWebp":true,"linkImagesToOriginal":false,"backgroundColor":"transparent","quality":50,"withAvif":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"João Rodrigues","short_name":"JR","start_url":"/","background_color":"#FFFFFF","theme_color":"#000000","display":"minimal-ui","icon":"./content/images/image.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"ab0a2bea00596a3922af8c3142de220f"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-theme-portfolio-minimal/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://joaorodrigues.dev/","manifestSettings":{"favicon":"./content/images/image.png","siteName":"João Rodrigues","shortName":"JR","startUrl":"/","backgroundColor":"#FFFFFF","themeColor":"#000000","display":"minimal-ui"},"contentDirectory":"./content","blogSettings":{"path":"/","usePathPrefixForArticles":false}},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
