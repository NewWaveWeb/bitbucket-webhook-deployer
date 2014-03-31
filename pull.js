var spawn=require("child_process").spawn;
var sprintf=require("sprintf-js").sprintf;
var path=require("path");
var configDir=require("./configDir");
var config=require(path.join(configDir, "config"));

module.exports = function (repo) {
    var repoCfg=config.repositories[repo],
        dir=repoCfg.dir,
        msg, cmd, proc;

    if(!repoCfg) {
        msg=sprintf(
            "Configuration for '%s' doesn't exist",
            repo);
        console.log(msg);
        return undefined;
    }

    // Spawn a new git process.
    cmd=sprintf(
        "/usr/bin/sudo -u %(user)s -g %(group)s -H git pull",
        repoCfg);

    console.log("Executing " + cmd);
    proc=spawnCommand(cmd, dir);

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
