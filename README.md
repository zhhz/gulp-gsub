# gulp-gsub

gsub file content with gulp (gulpjs.com)

## Information

<table>
<tr>
<td>Package</td><td>gulp-gsub</td>
</tr>
<tr>
<td>Description</td>
<td>gsub(find & replace) file content with gulp (gulpjs.com)</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

## Usage


#### Install

```bash
$ npm install gulp-gsub --save-dev
```

## Example

```js
var gulp = require('gulp');
var gsub = require('gulp-gsub');

var pkg = require('./package.json');
var version = pkg.version;

gulp.task('gsub', function(){
  gulp.src('./index.html')
  .pipe(gsub({source: '.min.js', target: '.min.' + version + '.js'}))
  .pipe(gulp.dest('./'));
});

```

####You can view more examples in the [example folder.](https://github.com/zhhz/gulp-gsub/tree/master/examples)

## Options
### options.source
The content you want to find

    Type: `String`

Example:

```js
.pipe(gsub({source: 'mytext'})
```

### options.target
The content you want to replaced with

    Type: `String`

Example:

```js
.pipe(gsub({target: 'newtext'}))
```

## LICENSE

(MIT License)

Copyright (c) 2014 Zhonghai Zuo <zhonghai.zuo@gmail.com> zhhz

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
