const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildSass = () => {
  return src('scss/main.scss')
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(dest('css'));
}

exports.default = series(buildSass);