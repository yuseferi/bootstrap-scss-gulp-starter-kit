var path = "..";
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "..",
        notify: false
    });

    gulp.watch(path +"/assets/scss/*.scss", ['sass']);
    gulp.watch(path +"/**/*", browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(path +"/assets/scss/*.scss")
        .pipe(plumber())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass())
        .pipe(gulp.dest(path +"/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);