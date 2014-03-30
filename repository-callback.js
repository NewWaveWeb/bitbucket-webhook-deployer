var spawn=require("child_process").spawn;
var sprintf=require("sprintf-js").sprintf;

// Module object keys are gitlab repository names.
module.exports={
  "webmail" : function () {
    pull_webmail("/data/www/webmail_dev");
  },
  "webmail-production" : function () {
    pull_webmail("/data/www/webmail");
  }
};

function pull_webmail(dir) {
  var webmail_uid=33;
  var webmail_gid=33;

  // Spawn a new git process.
  var proc=spawn("/usr/bin/git", ["pull"], {
    "cwd" : dir,
    "uid" : webmail_uid,
    "gid" : webmail_gid
  });

  proc.on('exit', function (code, signal) {
    console.log(sprintf("git pull on %s exited with code %d", dir, code));
  });

  return proc;
}
