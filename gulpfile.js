/**
 * Purpose of a gulp file is to describe 'tasks'
 * that convert from 'developer mode' to 'productioin mode'. Things
 * like converting Sass => CSS, removing comments, merging
 * files, etc
  */

  // Step 1: import gulp
  const gulp = require('gulp');
  const sass = require('gulp-sass');
  const browser = require('gulp-browser');
  const imagemin = require('gulp-imagemin');
  const strip = require('gulp-strip-comments');

  gulp.task('default', ['html', 'css', 'js', 'images']);

  gulp.task('html', () => {
      return gulp.src('index.html')
        .pipe(strip())
        .pipe(gulp.dest('docs/'));
  });

  gulp.task('css', () => {
      return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('docs/'));
  });

  gulp.task('js', () => {
      return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(strip())
        .pipe(gulp.dest('docs/'));
  });

  gulp.task('images', () => {
    return gulp.src('images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('docs/images'))
  });

  gulp.task('watch', ['default'], () => {
  gulp.watch('*.html',['html']);
  gulp.watch('scss/*.scss', ['css']);
  gulp.watch('js/*/*.js', ['js']);
  gulp.watch('js/*.js', ['js']);
  gulp.watch('images/*', ['images']);
});
