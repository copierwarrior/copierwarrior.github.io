var child = require('child_process');
var gulp = require('gulp');
var concat = require('gulp-concat');
var filelog = require('gulp-filelog');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var sequence = require('run-sequence');

gulp.task('default', function(done) {
  sequence('sass', 'js', 'jekyll:serve', 'sass:watch', 'js:watch', done);
});

gulp.task('build', function(done) {
  sequence('sass', 'fonts', 'js', 'jekyll', 'html-minify', done);
});

gulp.task('fonts', function() {
  gulp.src('./bower_components/bootstrap-sass/assets/fonts/bootstrap/**.*')
    .pipe(gulp.dest('./fonts/bootstrap'));
  return gulp.src('./bower_components/font-awesome/fonts/**.*')
    .pipe(gulp.dest('./fonts'));
});

gulp.task('sass', function() {
  // Compile SASS.
  return gulp.src('./css/style.scss')
    .pipe(sass({
      includePaths: [
        './bower_components/bootstrap-sass/assets/stylesheets',
        './bower_components/font-awesome/scss',
        './bower_components/owl-carousel-sass/owl-carousel/scss'
      ],
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(filelog());
});

gulp.task('sass:watch', function() {
  gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('js', function() {
  // Compile JS.
  return gulp.src([
    './bower_components/jquery/jquery.js',
    './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    './bower_components/jquery.easing/js/jquery.easing.js',
    './bower_components/owl-carousel-sass/owl-carousel/owl.carousel.js',
    './bower_components/jquery-animateNumber/jquery.animateNumber.js',
    './bower_components/waypoints/lib/jquery.waypoints.js',
    './js/custom.js'
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(filelog());
});

gulp.task('js:watch', function() {
  gulp.watch('./_js/**/*.js', ['js']);
});

gulp.task('html-minify', function() {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_site'));
});

gulp.task('jekyll', function(gulpCallback) {
  const jekyll = child.spawn('jekyll', ['build']);

  const jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        gutil.log('Jekyll: ' + message);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);

  jekyll.on('exit', gulpCallback);
});

gulp.task('jekyll:serve', function() {
  const jekyll = child.spawn('jekyll', ['serve']);

  const jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        gutil.log('Jekyll: ' + message);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});
