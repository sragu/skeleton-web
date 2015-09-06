'use strict';

import gulp from 'gulp'
import cache from 'gulp-cached'
import standard from 'gulp-standard'

// Lint JS.
gulp.task('lintjs', () => {
  return gulp.src(global.paths.js)
  .pipe(cache('lintjs'))
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: true
  }));
});

// Lint all the things!
gulp.task('lint', ['lintjs']);
