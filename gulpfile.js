const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');

const base = {
    sass: 'sass/',
    sassWatch: 'sass/**.sass',
    sassFile: 'base.sass',
    cssDir: 'css/',
    cssFile: 'style.css'
}


gulp.task('sass', function () {
    return gulp.src(base.sass + base.sassFile)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename(base.cssFile))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(base.cssDir));
});

gulp.task('watch', function (){
    gulp.watch([base.sassWatch], gulp.series('sass'));
});












// gulp.task('default', gulp.series('styles'));