module.exports = {
  src: {
    root: './source/',
    views: './source/views/',
    scss: './source/styles/**/*.scss',
    js: './source/js/src/*.js',
    jsVendor: './source/js/vendor/*.js',
    img: './source/img/**/*.*',
    helpers: './gulp/helpers/'
  },
  dest: {
    root: './app/',
    css: './app/assets/css/',
    img: './app/assets/img/',
    js: './app/assets/js',
    fonts: './app/assets/fonts/'
  },
  watch: {
    views: './source/views/**/*.*',
    scss: './source/styles/**/*.*',
    js: './source/js/**/*',
    img: './app/assets/img/**/*'
  }
};
