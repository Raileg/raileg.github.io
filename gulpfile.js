var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return gulp.src('src/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('src/css'));
});
