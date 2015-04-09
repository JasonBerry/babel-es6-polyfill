'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var DEST = './';

gulp.task('build', function () {
    return browserify('./polyfill.js').bundle()
        .pipe(source('browser-polyfill.js'))
        .pipe(buffer())
        .pipe(gulp.dest(DEST))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(DEST));
});

gulp.task('clean', function (cb) {
    del([
        'browser-polyfill.js',
        'browser-polyfill.min.js'
    ], cb);
});