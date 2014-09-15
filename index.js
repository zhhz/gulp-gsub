var through = require('through2'),
  gutil = require('gulp-util');

module.exports = function(opts) {
  if(!opts) opts = {};

  return through.obj(function(file, enc, cb) {
    if(file.isNull()) return cb(null, file);
    if(file.isStream()) return cb(new Error('gulp-ga: streams not supported'))

    if(!opts.source || !opts.target){
      gutil.log('invalid options', gutil.colors.red(JSON.stringify(opts)));
    }else{
      var reg = RegExp(opts.source, 'g');
      var content = file.contents.toString();
      content = content.replace(reg, opts.target);
      file.contents = new Buffer(content);
    }
    cb(null, file)
  });
};
