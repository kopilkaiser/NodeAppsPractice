module.exports = {
  proxy: "localhost:2222",
  files: [
    "./views/*.ejs",
    "./views/layouts/*.ejs",
    "./public/css/*.css",
    "./public/js/*.js",
  ],
  watchOptions: {
    ignored: "node_modules",
  },
  open : false,
  logLevel: "info",
  notify: false
};
