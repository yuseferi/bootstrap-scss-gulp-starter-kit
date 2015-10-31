var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('../assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass())
    .pipe(gulp.dest('../assets/css'))
    .pipe(browserSync.stream({match: "*.css"}));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: '..'
        },
        notify: false
    })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('../assets/scss/*.scss', ['sass']); 
    gulp.watch('../*', browserSync.reload);
    gulp.watch('../**/*', browserSync.reload);
});