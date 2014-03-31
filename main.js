var config=require("./config");
var gitlabhook = require('gitlabhook');
var pull = require("./pull");

var gitlab = gitlabhook({
    "host" : config.host,
    "port" : config.port
}, function (data) {
    pull(data.repository.name);
});

gitlab.listen();
