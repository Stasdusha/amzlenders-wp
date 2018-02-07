const gulp = require('gulp');
const panini = require('panini');
const browserSync = require('browser-sync').create();
const config = require('../config');

gulp.task('html', function () {
  panini.refresh();
  gulp.src(config.src.views + 'pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: config.src.views + 'pages/',
      layouts: config.src.views + 'layouts/',
      pageLayouts: {
        // All pages inside src/pages/blog will use the blog.html layout
        'support': 'support'
      },
      partials: config.src.views + 'partials/',
      data: config.src.views + 'data/',
      helpers: config.src.views + 'helpers/'
    }))
    .pipe(gulp.dest(config.dest.root));
});
