var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var cssnested = require('postcss-nested');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');

// STYLES TASK
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, mixins, cssvars, cssnested, autoprefixer]))
    .on('error', function(err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});