var gulp=require("gulp");
var configDir=require("./configDir");
var replace=require("gulp-replace");

gulp.task("install-ubuntu", ["install-config",
                             "install-upstart-script"]);

gulp.task("install-config", function () {
    gulp.src("config.js")
        .pipe(gulp.dest(configDir));
});

gulp.task("install-upstart-script", function () {
    gulp.src("init-scripts/upstart/gitlab-pull-webhook.conf")
        .pipe(replace('%installDir%', process.cwd()))
        .pipe(gulp.dest("/etc/init"));
});
