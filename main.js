var configDir=require("./configDir");
var config=require(configDir);
var gitlabhook = require('gitlabhook');
var pull = require("./pull");

var gitlab = gitlabhook({
    "host" : config.host,
    "port" : config.port
}, function (data) {
    pull(data);
});

gitlab.listen();
