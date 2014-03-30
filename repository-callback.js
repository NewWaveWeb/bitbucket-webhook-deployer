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
  // Spawn a new git process.
  var args="-u www-data -g www-data -H git pull".split(" ");
  var proc=spawn("/usr/bin/sudo", args, {
    "cwd" : dir,
    "env" : process.env
  });

  proc.on('exit', function (code, signal) {
    console.log(sprintf("git pull on %s exited with code %d", dir, code));
  });

  return proc;
}
