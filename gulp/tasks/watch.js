const gulp = require('gulp');
const config = require('../config');

gulp.task('default', ['serve'], function () {
  gulp.watch(config.watch.scss, ['scss', 'reload']);
  gulp.watch(config.watch.views, ['html', 'reload']);
});
