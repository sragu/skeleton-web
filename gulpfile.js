'use strict';

// Specify paths & globbing patterns for tasks.
global.paths = {
  // HTML sources.
  'html': './src/*.html',
  // JS sources.
  'js': './src/!(jspm_packages)/**/*.js',
  // SASS sources.
  'sass': './src/scss/**/*.scss',
  // Image sources.
  'img': './src/img/*',
  // Sources folder.
  'src': './src',
  // Compiled CSS folder.
  'css': './src/css',
  // Distribution folder.
  'dist': './dist'
};

// allows es6 for gulp task code
require('babel/register');

// Require all tasks in the 'gulp' folder.
require('require-dir')('./gulp', { recurse: false });
