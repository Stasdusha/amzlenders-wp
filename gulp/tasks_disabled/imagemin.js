// const gulp = require('gulp');
// const notify = require('gulp-notify');
// const imagemin = require('gulp-imagemin');
// const config = require('../config');
//
// gulp.task('default', () =>
//   gulp.src(config.src.img)
//     .pipe(imagemin([
//       imagemin.gifsicle({interlaced: true}),
//       imagemin.jpegtran({progressive: true}),
//       imagemin.optipng({optimizationLevel: 5}),
//       imagemin.svgo({
//         plugins: [
//           {removeViewBox: true},
//           {cleanupIDs: false}
//         ]
//       })
//     ]))
//     .pipe(gulp.dest(config.dest.img))
// );
