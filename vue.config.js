const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map",
  },
  //Modificar según donde esté alojado la APP en el servidor
  publicPath: "/",
});
