const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');
const config = require('../config');

const symbolSprite = {
  shape: {
    id: {
      generator: 'symbol-%s',
      whitespace: '-'
    },
    spacing: {
      padding: 0
    },
  },
  mode: {
    symbol: {
      dest: 'sprite',						      // Mode specific output directory
      dimensions: '',			            // Suffix for dimension CSS selectors
      sprite: 'sprite.svg',		        // Sprite path and name
      bust: false,					          // Cache busting (mode dependent default value)
      render: {								        // Stylesheet rendering definitions
        scss: {                       // Scss stylesheet options
          template: config.src.helpers + 'svg/symbols/sprite.scss',
          dest: '_svg_symbol_sprite.scss',
        },
      },
      example: {
        template: config.src.helpers + 'svg/symbols/sprite.html',
      },
    },
  },
};

gulp.task('svg-symbol-sprite', () => {
  return gulp.src(config.src.img + 'icons/*.svg')
    // .pipe(svgo())
    .pipe(svgSprite(symbolSprite))
    .on('error', function (error) { console.log(error); })
    .pipe(gulp.dest(config.dest.img));
});
