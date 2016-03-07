var path = require('path');
var tape = require('tape');
var assign = require('object-assign');

module.exports = function () {
  var self = this;

  self.tape = function (opts) {
    opts = assign({
      stream: process.stdout,
      reporter: require('tap-spec'),
      options: {}
    }, opts);

    var instance = tape.createStream(opts.options);
    instance.pipe(opts.reporter()).pipe(opts.stream);

    return self.unwrap(function (files) {
      files.forEach(function (f) {
        require(path.resolve(f));
      });

      return instance;
    });
  };
};
