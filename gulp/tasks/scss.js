const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const willchangeTransition = require('postcss-will-change-transition');
const willchange = require('postcss-will-change');
const rename = require('gulp-rename');
const config = require('../config');

gulp.task('scss', function () {
  return gulp.src(config.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({
      // includePaths: PATHS.sass,
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(postcss([
      // autoprefixer(['last 2 versions', '> 1%']),
      willchangeTransition,
      willchange,
      cssnano]))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest.css));
});
