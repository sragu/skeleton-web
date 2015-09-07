'use strict'

import gulp from 'gulp'
import cache from 'gulp-cached'
import standard from 'gulp-standard'
import sasslint from 'gulp-sass-lint'

// Lint JS.
gulp.task('lintjs', () => {
  gulp.src(global.paths.js)
    .pipe(cache('lintjs'))
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})

// Lint Sass
gulp.task('lintsass', () => {
  gulp.src(global.paths.sass)
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
})

// Lint all the things!
gulp.task('lint', ['lintjs', 'lintsass'])
