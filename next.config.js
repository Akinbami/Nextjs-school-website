const withCSS = require('@zeit/next-css')
module.exports = withCSS({
	experimental: { css: true },
  target: 'serverless', // <- add here
  cssModules: true
  // assetPrefix: "https://s3.amazonaws.com/abc-static-assets",
})

