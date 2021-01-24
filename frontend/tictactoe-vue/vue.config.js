const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  configureWebpack: {
    // Add babel-polyfill before app entry point
    entry: ["babel-polyfill", "./src/main.js"],
    plugins: [new GenerateSW()],

    // Allow importing Vue files without '.vue'
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve(__dirname, "src/")
      },
      extensions: ["*", ".js", ".vue", ".json"]
    }
  },

  // Prove lint rules on saving in developer mode
  lintOnSave: !isProduction,

  css: {
    sourceMap: true
  },

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: "../../public",
  assetsDir: "myAssets",

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: isProduction ? "../app/views/vueIndex.scala.html" : "index.html",

  // modify the baseUrl of the webpage.
  // make sure to do this only in production.
  publicPath: isProduction ? "./" : "/"
};
