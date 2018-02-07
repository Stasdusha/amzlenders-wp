const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('reload', function() {
  return browserSync.reload();
});

gulp.task('serve', function() {
  browserSync.init({
    server: './app',
    port: 3001,
    open: true,
    ui: {
      port: 3002
    }
  });
});
