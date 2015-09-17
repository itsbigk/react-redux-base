var gulp    = require('gulp'),
    webpack = require('gulp-webpack');

gulp.task('webpack', function() {
  return gulp.src('./src/App.jsx')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./public/'));
});
