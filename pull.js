var exec=require("child_process").exec;
var sprintf=require("sprintf-js").sprintf;
var configDir=require("./configDir");
var config=require(configDir);

module.exports = function (data) {
    /*var repo=data.repository.name.replace(/\s/g, ''),
        payloadBranch=data.ref.split('/').pop(),
        repoCfg=config.repositories[repo],
        name=repoCfg.name,
        basepath=repoCfg.basepath,
        command=repoCfg.command,
        branch=repoCfg.branch,
        msg, cmd, proc;

    if(payloadBranch != branch){
       msg=sprintf(
            "Branch '%s' is not defined, skipping.",
            payloadBranch);
        console.log(msg);
        return undefined; 
    }
    
    if(!repoCfg) {
        msg=sprintf(
            "Configuration for '%s' doesn't exist",
            repo);
        console.log(msg);
        return undefined;
    }

    cmd=sprintf(
        "cd %(basepath)s && %(command)s",
        repoCfg);

    console.log("Executing " + cmd +" process "+name);
    proc=execCommand(cmd);

    proc.on('exit', function (code, signal) {
        console.log(sprintf("command %s exited with code %d", command, code));
    });

    return proc;
}

function execCommand(cmd) {
   return exec(cmd, function(error, stdout, stderr) {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
        if (error !== null) {
            console.log('exec error: ', error);
        }
    });
*/
}
