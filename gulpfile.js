'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var browserify = require('browserify');
var uglify = require('gulp-uglify');

var polyfillFilename = 'browser-polyfill.js';

gulp.task('build', function () {
    return browserify('./polyfill.js').bundle()
        .pipe(source(polyfillFilename))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});

gulp.task('clean', function (cb) {
    del([ polyfillFilename ], cb);
});