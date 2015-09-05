'use strict';

var gulp = require('gulp');
var cache = require('gulp-cached');
var standard = require('gulp-standard');

// Lint JS.
gulp.task('lintjs', function () {
  return gulp.src(global.paths.js)
  .pipe(cache('lintjs'))
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: true
  }));
});

// Lint all the things!
gulp.task('lint', ['lintjs']);
