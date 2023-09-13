const gulp = require("gulp");
const browserSync = require("browser-sync");




gulp.task("server", function () {
    browserSync({
        server: {
            baseDir: "src",
        },
    });

    gulp.watch("src/*.html").on("change", browserSync.reload)
})


