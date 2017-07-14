const connect = require('connect');
const http = require('http');
const staticServe = require('serve-static');

module.exports = function(cb) {
  const app = connect();
  app.use('/', staticServe('src'))

  cb = cb || function () {};
  http.createServer(app).listen(3000, cb);
};

if (require.main === module) {
  module.exports();
}
