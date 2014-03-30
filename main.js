var config=require("./config");
var repoCb=require("./repository-callback");
var gitlabhook = require('gitlabhook');

var gitlab = gitlabhook({
  "port" : config.port
}, function (data) {
  var repo=data.repository.name;
  
  // If repository is defined in repository-config.js, execute it.
  if(repoCb[repo]) {
    repoCb[repo]();
  }
});

gitlab.listen();
