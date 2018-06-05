var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src(['./src/main.scss'])
        //.pipe(sourcemaps.init())
        .pipe(sass({
            sourceMapEmbed: true,
            sourceMap: './dist/one-true-form.css.map'
        }).on('error', sass.logError))
        .pipe(rename('one-true-form.css'))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:minify', function() {
    gulp.src(['./src/main.scss'])
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('one-true-form.min.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass', 'sass:minify']);
});

gulp.task('default', ['sass:watch']);
