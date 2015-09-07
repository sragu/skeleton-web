'use strict'

import gulp from 'gulp'
import sassbeautify from 'gulp-sassbeautify'

// Beautify Sass
gulp.task('beautifysass', () => {
  gulp.src(global.paths.sass, { base: '.' }) // base allows to Beautify inplace
    .pipe(sassbeautify())
    .pipe(gulp.dest('.'))
})

// Beautify all things
gulp.task('beautify', ['beautifysass'])
