var concat = require('gulp-concat');
const gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
const config = require('../config');


gulp.task('scripts', function() {
  return gulp.src([
    config.src.jsVendor,
    config.src.js
    ])
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest(config.dest.js));
});