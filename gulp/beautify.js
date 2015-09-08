'use strict'

import gulp from 'gulp'
import sassbeautify from 'gulp-sassbeautify'
import esformatter from 'gulp-esformatter'

// Beautify Sass
gulp.task('beautifysass', () => {
  gulp.src(global.paths.sass, {
    base: '.'
  }) // base allows to Beautify inplace
    .pipe(sassbeautify())
    .pipe(gulp.dest('.'))
})

gulp.task('beautifyjs', () => {
  gulp.src(global.paths.js, {
    base: '.'
  })
    .pipe(esformatter({
      // this needs to match the 'standard' used by lint
      // hope in the future, config from 'standard' module is reused here
      whiteSpace: {
        after: {
          FunctionName: 1
        }
      }
    }))
    .pipe(gulp.dest('.'))
})

// Beautify all things
gulp.task('beautify', ['beautifysass', 'beautifyjs'])
