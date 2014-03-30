var config=require("./repository-config");
var gitlabhook = require('gitlabhook');
var gitlab = gitlabhook({
  "port" : "3240",
  "logger" : {
    "info" : function (data) {
      console.log("==INFO==");
      console.log(data);
    },
    "error" : function (data) {
      console.log("==ERROR==");
      console.log(data);
    }
  }
}, function (data) {
  var repo=data.repository.name;
  // If repository is defined in repository-config.js, execute it.
  if(config[repo]) {
    config[repo]();
  }
});

gitlab.listen();
