
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
if (process.env.NODE_ENV === "production") {
  module.exports = {
    entry: "./src/pro-main.js",
    devtool: "none",
    plugins: [new BundleAnalyzerPlugin()],
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      axios: "axios",
      loadsh: "_",
      echarts: "echarts",
      nprogress: "NProgress",
      VueQuillEditor: 'vue-quill-editor'
    },
  };
} else {
  module.exports = {
    entry: "./src/dev-main.js",
  };
}