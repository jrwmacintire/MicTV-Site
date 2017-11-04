var gulp = require('gulp');
var util = require('gulp-util');
var minifyhtml = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var minfycss = require('gulp-minify-css');
var connect = require('gulp-connect');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var iconfont = require('gulp-iconfont');
var watch = require('gulp-watch');
var del = require('del');
var sass = require('gulp-sass');
var rubysass = require('gulp-ruby-sass');
var criticalCss = require('gulp-critical-css');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
var changed = require('gulp-changed');
var sitemap = require('gulp-sitemap');

var htmlSource = 'app/*.html';
var cssSource = 'app/styles/*.css';
var jsSource = 'app/scripts/*.js';
var imagesSource = 'app/images/*';
var allSources = htmlSource.concat(cssSource).concat(jsSource);
var htmlDest = 'assets/';
var cssDest = 'assets/styles/';
var jsDest = 'assets/scripts/';
var imagesDest = 'assets/images/';

//
//
//                  'Connect' server
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        port: 8080,
        livereload: true
    });
});

//
//
//                  Livereload
gulp.task('livereload', function() {
    gulp.src(allSources)
    .pipe(connect.reload());
});

//
//
//                  Watch files to trigger 'livereload'
gulp.task('watch', function() {
    gulp.watch(allSources, ['livereload']);
});

//
//
//                  HTML
gulp.task('html', function() {
    util.log('~~~~~ HTML Task ~~~~~')
    return gulp.src(htmlSource)
    .pipe(changed(htmlDest))
    .pipe(minifyhtml({ collapseWhitespace: true }))
    .pipe(gulp.dest(htmlDest))
    .pipe(connect.reload());
});

//
//
//                  CSS
gulp.task('css', function() {
    util.log('~~~~~ CSS ~~~~~~')
    return gulp.src(cssSource)
    .pipe(changed(cssSource))
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(criticalCss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssDest))
    .pipe(connect.reload());
});

//
//
//                  JS
gulp.task('js', function() {
    util.log('~~~~~ JS ~~~~~~')
    return gulp.src(jsSource)
    .pipe(changed(jsDest))
    .pipe(clean())
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(connect.reload());
});

//
//
//              Images
gulp.task('images', function() {
    util.log('~~~~~ IMAGES ~~~~~')
    return gulp.src(imagesSource)
    .pipe(changed(imagesDest))
    .pipe(imagemin())
    .pipe(gulp.dest(imagesDest));
});

//
//
//             Sitemap
gulp.task('sitemap', function() {
    gulp.src(htmlSource, {
        read: false
    })
    .pipe(sitemap({
        siteUrl: 'https://johnmacintire.com'
    }))
    .pipe(gulp.dest(htmlDest));
});

//
//
//              Default
gulp.task('default', [
    'connect',
    // 'livereload',
    'watch',
    'css',
    'html',
    'js',
    'images',
    'sitemap'
]);
