const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
const withVideos = require('next-videos');

 

const nextJsConfig = {
  target: 'serverless',
};


module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});


module.exports = withSass({
  cssModules: true
});


 
module.exports = withVideos()
// module.exports = withSass({ cssModules: true, sassLoaderOptions: { includePaths: ['./directory-your-global-styles-are-in'] } });


// module.exports = withTypescript(withSass({
//     cssModules: true
// }))

module.exports = withOptimizedImages( { } );