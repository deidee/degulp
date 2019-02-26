
'use strict';

var gulp = require('gulp');
var pipeline = require('readable-stream').pipeline;
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('compress', function () {
    return pipeline(
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    );
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});
