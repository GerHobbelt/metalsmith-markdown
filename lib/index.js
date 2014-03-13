
var basename = require('path').basename;
var debug = require('debug')('metalsmith-brucedown');
var dirname = require('path').dirname;
var extname = require('path').extname;
var forEach = require('async').forEach;
var brucedown = require('brucedown');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to convert markdown files.
 *
 * @param {Object} options (optional)
 *   @property {Array} keys
 * @return {Function}
 */

function plugin(options){
  options = options || {};

  return function(files, metalsmith, callback){
    forEach(
      Object.keys(files),
      function (file, done) {
        var data = files[file];
        var dir = dirname(file);
        var html = basename(file, extname(file)) + '.html';
        if ('.' != dir) html = dir + '/' + html;

        debug('converting file: %s', file);

        brucedown(data.contents.toString(), options, function (err, str) {
          if (err)
            return done(err);

          data.contents = new Buffer(str);
          delete files[file];
          files[html] = data;
          done();
        });
      },
      callback
    );
  };
}

/**
 * Check if a `file` is markdown.
 *
 * @param {String} file
 * @return {Boolean}
 */

function markdown(file){
  return /\.md|\.markdown/.test(extname(file));
}