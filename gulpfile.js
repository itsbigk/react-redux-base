var gulp       = require('gulp'),
    webpack    = require('gulp-webpack'),
    sass       = require('gulp-sass'),
    rename     = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon    = require('gulp-nodemon');

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


gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js', './src/**/*.jsx'], ['webpack']);
  gulp.watch('./src/sass/*', ['sass']);
});

gulp.task('nodemon', function() {
  nodemon({
    script: './server.js',
    ext: 'js jsx scss html'
  })
    .on('start', ['webpack', 'watch'])
    .on('change', ['watch'])
    .on('restart', function() {
      console.log('Restarted');
    });
});

gulp.task('default', ['nodemon']);
