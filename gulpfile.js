var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

var files = [
  "index.html",
  "slide.md",
  "images/**/*",
  "node_modules/reveal.js/**/*"
];

gulp.task('deploy', function() {
  return gulp.src(files, {base: '.'})
    .pipe(ghPages());
});
