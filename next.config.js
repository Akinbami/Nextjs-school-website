const withCSS = require('@zeit/next-css')

const sitemap = require('nextjs-sitemap-generator');  
sitemap({  
  baseUrl: 'schoolofabi.com',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'public/',
  ignoredPaths: ['admin'], 
});

module.exports = withCSS({
	exportPathMap: function () {
		return {
		  '/': { page: '/' },
		}
	},
	target: 'serverless', // <- add here
	cssModules: true
	// assetPrefix: "https://s3.amazonaws.com/abc-static-assets",
})

