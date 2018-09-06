'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./src/assests/sass/*.scss')
           .pipe(sass().on('error', sass.logError))
           .pipe(gulp.dest('./src/assests/css/'));

});


gulp.task('sass-watch', function() {
    gulp.watch('./src/assests/sass/*.scss', ['sass']);
})

