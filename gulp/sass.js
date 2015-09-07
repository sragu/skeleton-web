'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'

gulp.task('sass', () => {
  gulp.src(global.paths.sass)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(global.paths.css))
})
