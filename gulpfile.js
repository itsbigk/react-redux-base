var gulp       = require('gulp'),
    webpack    = require('gulp-webpack'),
    sass       = require('gulp-sass'),
    rename     = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('webpack', function() {
  return gulp.src('./src/App.jsx')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./public'));
});

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./public'));
});
