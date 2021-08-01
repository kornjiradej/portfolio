const withPlugins = require('next-compose-plugins'); 
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withOffline = require('next-offline');
const optimizedImages = require('next-optimized-images');
 
const optimizedImagesSetting = [optimizedImages, {
  mozjpeg: {
    quality: 80,
  },
  pngquant: {
    speed: 3,
    strip: true,
    verbose: true,
  },
}]

module.exports = withPlugins([ optimizedImagesSetting, 
  [withImages],
  [withFonts],
  [withOffline],
  { 
    // basePath: '/',
    assetPrefix: '/',
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
