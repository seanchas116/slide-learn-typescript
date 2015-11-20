var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src(["index.html", "slide.md", "node_modules/reveal.js/**/*"])
    .pipe(ghPages());
});
