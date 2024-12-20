import { watch, src, dest, series } from 'gulp';
import { spawn } from 'child_process';
import concat from 'gulp-concat';
import filelog from 'gulp-filelog';
import htmlmin from 'gulp-htmlmin';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import uglify from 'gulp-uglify';
import purify from 'gulp-purifycss';
import { default as log } from 'fancy-log';

// Compile SASS.
export const sassCompile = () => src('./_css/style.scss')
    .pipe(sass({
      includePaths: [
        './_css',
        './node_modules/bootstrap/scss',
        './node_modules/font-awesome/scss',
        './node_modules/owl-carousel-legacy/css'
      ]
    })
    .on('error', sass.logError))
    .pipe(purify(['./index.html']), {
      minify: true,
      whitelist: [
        '*bounceInLeft*',
        '*bounceInRight*',
        '*fadeInUp*',
        '*fadeInUpDelay*',
        '*fadeInDown*',
        '*fadeInUp*',
        '*fadeInLeft*',
        '*fadeInRight*'
      ]
    })
    .pipe(dest('./css'))
    .pipe(filelog());

export const sassWatch = () => watch('./_css/**/*.scss', sassCompile);

// Compile JS.
export const jsCompile = () => src([
    './node_modules/jquery/src/jquery.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/jquery.easing/jquery.easing.js',
    './node_modules/owl-carousel-legacy/owl.carousel.js',
    './node_modules/jquery.animate-number/jquery.animateNumber.js',
    './node_modules/waypoints/lib/jquery.waypoints.js',
    './js/custom.js'
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(dest('js'))
    .pipe(filelog());

export const jsWatch = () => watch('./_js/**/*.js', jsCompile);

export const htmlMinify = () => src('_site/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest('_site'));

export const jekyll = (gulpCallback) => {
  const jekyll = spawn('jekyll', ['build']);

  const jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        log('Jekyll: ' + message);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);

  jekyll.on('exit', gulpCallback);
}

export const jekyllServe = () => {
  const jekyll = spawn('jekyll', ['serve']);

  const jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        log('Jekyll: ' + message);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
}

export const build = series(sassCompile, jsCompile, jekyll, htmlMinify);
export default series(sassCompile, jsCompile, jekyllServe, sassWatch, jsWatch);
