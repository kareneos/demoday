const gulp = require('gulp');

gulp.task ('default', ['lab', 'lab2']);

gulp.task ('lab', function(){
    console.log("hola mundo");
});

gulp.task('lab2', function(){
    console.log("Hola mundo 2");
});