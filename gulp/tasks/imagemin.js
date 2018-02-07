const gulp = require('gulp');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const config = require('../config');

gulp.task('minify-img', function (){
  gulp.src(config.src.img)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 10}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest(config.dest.img));
});
