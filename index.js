var tape = require('tape');
var assign = require('object-assign');

module.exports = function () {
  this.tape = function (opts) {
    opts = assign({
      stream: process.stdout,
      reporter: require('tap-spec'),
      options: {}
    }, opts);

    var instance = tape.createStream(opts.options);
    instance.pipe(opts.reporter).pipe(opts.stream);

    console.log(instance);
  };
};
