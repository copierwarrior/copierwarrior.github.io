import gulp from 'gulp';
import { spawn } from 'child_process';
import concat from 'gulp-concat';
import htmlmin from 'gulp-htmlmin';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import terser from 'gulp-terser';
import postcss from 'gulp-postcss';
import purgecss from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';
import removeComments from 'postcss-discard-comments';
import sourcemaps from 'gulp-sourcemaps';
import { default as log } from 'fancy-log';

// Dev
export const cssDev = () => gulp.src('./_css/style.scss')
    .pipe(sass({
      includePaths: [
        './_css',
        './node_modules/bootstrap-sass/assets/stylesheets',
        './node_modules/font-awesome/scss',
      ],
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./css'));

export const cssWatch = () => gulp.watch('./_css/**/*.scss', cssDev);

export const jsDev = () => gulp.src([
      './node_modules/jquery/jquery.js',
      './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
      './node_modules/jquery.easing/jquery.easing.1.3.min.js',
      './node_modules/jquery.animate-number/jquery.animateNumber.min.js',
      './node_modules/waypoints/lib/jquery.waypoints.min.js',
      './_js/custom.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('js'));

export const jsWatch = () => gulp.watch('./_js/**/*.js', jsDev);

export const htmlServe = () => {
  const eleventy = spawn('npx', ['@11ty/eleventy', '--serve']);

  const htmlLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        log('11ty: ' + message);
      });
  };

  eleventy.stdout.on('data', htmlLogger);
  eleventy.stderr.on('data', htmlLogger);
};

// Prod
export const cssProd = () => gulp.src('./_css/style.scss')
    .pipe(sass({
      includePaths: [
        './_css',
        './node_modules/bootstrap-sass/assets/stylesheets',
        './node_modules/font-awesome/scss',
      ],
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./css'));

export const jsProd = () => gulp.src([
      './node_modules/jquery/jquery.js',
      './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
      './node_modules/jquery.easing/jquery.easing.1.3.min.js',
      './node_modules/jquery.animate-number/jquery.animateNumber.min.js',
      './node_modules/waypoints/lib/jquery.waypoints.min.js',
      './_js/custom.js'
    ])
    .pipe(terser({
      toplevel: true,
      format: {
        comments: false
      }
    }))
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'));

export const htmlBuild = (gulpCallback) => {
  const eleventy = spawn('npx', ['@11ty/eleventy']);

  const htmlLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        log('11ty: ' + message);
      });
  };

  eleventy.stdout.on('data', htmlLogger);
  eleventy.stderr.on('data', htmlLogger);

  eleventy.on('exit', gulpCallback);
};

export const dev = gulp.series(cssProd, jsProd, gulp.parallel(htmlServe, cssWatch, jsWatch));
export const build = gulp.series(cssProd, jsProd, htmlBuild);

export default dev;
