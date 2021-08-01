const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
 
module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
  }],
  { 
    basePath: 'https://kornjiradej.github.io/',
    assetPrefix: 'https://kornjiradej.github.io/',
    images: {
      loader: "imgix",
      path: "",
    },
    imagesPublicPath: '/_next/static/images/',
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
      }
    },
  },
]);
