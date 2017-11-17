var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src(['./src/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('one-true-form.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
