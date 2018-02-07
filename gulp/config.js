module.exports = {
  src: {
    root: './source/',
    views: './source/views/',
    scss: './source/styles/**/*.scss',
    js: './source/js/',
    img: './source/img/**/*.*',
    helpers: './gulp/helpers/'
  },
  dest: {
    root: './app/',
    css: './app/assets/css/',
    img: './app/assets/img/',
    fonts: './app/assets/fonts/'
  },
  watch: {
    views: './source/views/**/*.*',
    scss: './source/styles/**/*.*',
    js: './app/assets/js/**/*',
    img: './app/assets/img/**/*'
  }
};
