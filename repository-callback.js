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
  var cmd="/usr/bin/sudo -u www-data -g www-data -H git pull";
  var proc=spawnCommand(cmd, dir);

  proc.on('exit', function (code, signal) {
    console.log(sprintf("git pull on %s exited with code %d", dir, code));
  });

  return proc;
}

function spawnCommand(cmd, dir) {
  var args=cmd.split(" ");
  cmd=args.splice(0, 1)[0];

  return spawn(cmd, args, {
    "cwd": dir,
    "env" : process.env
  });
}
