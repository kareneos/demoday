const gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task ('default', ['lab', 'lab2']);

gulp.task ('lab', function(){
    console.log("hola mundo");
});

gulp.task('lab2', function(){
    console.log("Hola mundo 2");
});

// tarea de carpeta
gulp.task('one', function () {
    return gulp.src('./src/style.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function(){
    gulp.watch('./src/*.styl', ['one']);
})