const gulp = require('gulp');
const minify = require('gulp-minifier');

gulp.task("minifyHTML", function (done) {
  return gulp
    .src("./index.html")
    .pipe(
      minify({
        minify: true,
        minifyHTML: {
          collapseWhitespace: true,
          conservativeCollapse: true,
        },
      })
    )
    .pipe(gulp.dest("./dist"))
    .on("end", done);
});

gulp.task("minifyCSS", function (done) {
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
    .pipe(gulp.dest("./dist"))
    .on("end", done);
});

// Optional: Run both tasks with 'gulp'
gulp.task("default", gulp.series("minifyHTML", "minifyCSS"));