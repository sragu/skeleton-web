'use strict'

import gulp from 'gulp'
import connect from 'gulp-connect'

// Start local dev server.
gulp.task('connect', () => {
  connect.server({
    root: global.paths.src,
    livereload: true
  })
})
