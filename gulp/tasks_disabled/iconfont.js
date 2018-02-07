const gulp = require('gulp');
const notify = require('gulp-notify');
const iconfont = require('gulp-iconfont');
const svgo = require('gulp-svgo');
const consolidate = require('gulp-consolidate');
const config = require('../config');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const fontname = 'amzlenders';

gulp.task('Iconfont', function() {
  return gulp.src(config.src.img + 'icons/*.svg')
    .pipe(svgo())
    .pipe(
      iconfont({
        fontName: fontname,
        prependUnicode: false,
        formats: ['ttf', 'woff'],
        normalize: true,
        fontHeight: 1001,
        fontStyle: 'normal',
        fontWeight: 'normal'
      })
    )
    .on('glyphs', function(glyphs) {
      console.log(glyphs);
      gulp
        .src(config.src.helpers + 'fonts/_svgfont.scss')
        .pipe(
          consolidate('lodash', {
            glyphs: glyphs,
            fontName: fontname,
            fontPath: 'fonts/',
            className: 'icon'
          })
        )
        .pipe(gulp.dest(config.dest.css + 'lib/'));
      gulp
        .src(config.src.helpers + 'fonts/icons.html')
        .pipe(
          consolidate('lodash', {
            glyphs: glyphs,
            fontName: fontname,
            fontPath: 'fonts/',
            className: 'icon',
            htmlBefore: '<i class="icon ',
            htmlAfter: '"></i>',
            htmlBr: ''
          })
        )
        .pipe(gulp.dest(config.dest.css + 'lib/'));
    })
    .pipe(gulp.dest(config.dest.fonts))
    .pipe(reload({ stream: true }))
    .pipe(notify('Icon font updated!'));
});

gulp.task('font:watch', function() {
  gulp.watch(config.src.img + 'svg/*', ['font']);
});
