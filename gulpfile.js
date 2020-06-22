const gulp = require('gulp');
const minify = require('gulp-minifier');

gulp.task("minifyHTML", function () {
  return gulp
    .src("./index.html")
    .pipe(
      minify({
        minify: true,
        minifyHTML: {
          collapseWhitespace: true,
          conservativeCollapse: true,
        }})
    )
    .pipe(gulp.dest("./dist"));
});

gulp.task("minifyCSS", function () {
  return gulp
    .src("./src/style.css")
    .pipe(
      minify({
        minify: true,
        minifyCSS: true,
        getKeptComment: function (content, filePath) {
          var m = content.match(/\/\*![\s\S]*?\*\//gim);
          return (m && m.join("\n") + "\n") || "";
        },
      })
    )
    .pipe(gulp.dest("./dist"));
});