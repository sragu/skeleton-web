'use strict';


var gulp = require('gulp');
var requireDir = require('require-dir');

// Specify paths & globbing patterns for tasks.
global.paths = {
  // HTML sources.
  'html': './src/*.html',
  // JS sources.
  'js': './src/js/**/*.js',
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

// Require all tasks in the 'gulp' folder.
requireDir('./gulp', { recurse: false });
