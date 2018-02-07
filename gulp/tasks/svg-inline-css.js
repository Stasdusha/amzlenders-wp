const gulp = require('gulp');
const postcss = require('gulp-postcss');
const scss = require('postcss-scss');
const html = require('postcss-html');
const postcssSvg = require('postcss-svg');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');
const merge = require('merge-stream');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const config = require('../config');

const srcSVG = config.src.img + 'icons/*.svg';
const tmpDest = config.src.root + 'tmp/';
const dest = config.dest.css + 'lib/';

const symbolSprite = {
  shape: {
    id: {
      generator: 'icon-%s',
      whitespace: '-'
    },
    spacing: {
      padding: 0
    }
  },

  mode: {
    symbol: {
      dest: '.', // Mode specific output directory
      dimensions: '', // Suffix for dimension CSS selectors
      sprite: 'icons.svg', // Sprite path and name
      bust: false, // Cache busting (mode dependent default value)
      render: {
        // Stylesheet rendering definitions
        scss: {
          // Scss stylesheet options
          template: config.src.helpers + 'svg/icons/sprite.scss',
          dest: '_icons.scss'
        }
      },
      example: {
        template: config.src.helpers + 'svg/icons/sprite.html',
        dest: 'sprite.html'
      }
    }
  }
};

gulp.task('Icon-sprite', function () {
  return gulp
    .src(srcSVG)
    .pipe(svgo())
    .pipe(cheerio({
      run: function ($) {
        $('path').attr('fill', '#{$color}');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgSprite(symbolSprite))
    .on('error', function(error) {
      console.log(error);
    })
    .pipe(gulp.dest(tmpDest));
});

gulp.task('Icon-style', ['Icon-sprite'], function() {
  const scssStream = gulp
    .src(tmpDest + '*.scss')
    .pipe(postcss([postcssSvg], { syntax: scss }))
    .pipe(replace('%23%7B%24color%7D', '#{$color}'))
    .pipe(gulp.dest(dest));

  const htmlStream = gulp
    .src(tmpDest + '*.html')
    .pipe(postcss([postcssSvg], { syntax: html }))
    .pipe(gulp.dest(tmpDest));

  return merge(scssStream, htmlStream);
});
