const gulp = require('gulp');

var concat = require('gulp-concat');
var clean = require('gulp-clean');
var gulpCopy = require('gulp-copy');

const DIRECTORY_SITE = 'public';
const DIRECTORY_SRC = 'src';


gulp.task('clean', () => {
    return gulp.src(DIRECTORY_SITE, { read: false })
        .pipe(clean());
});


gulp.task('vendor', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/underscore/underscore-min.js',
        'node_modules/backbone/backbone-min.js',
        'node_modules/handlebars/dist/handlebars.js',
        'src/libs/**.js'

    ])
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('public/js'));
  });

  gulp.task('build', () => {
    return gulp.series('clean', 'vendor');
  })
