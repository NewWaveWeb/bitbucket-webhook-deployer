var configDir=require("./configDir");
var config=require(configDir);
var pull = require("./pull");
var express = require('express');
var app = module.exports = express();
app.use(require('body-parser')());


var server = app.listen(config.port, function () {
    app.post('*', function(req, res){
            
            var payload = JSON.parse(req.body.payload);
            pull(payload);
            res.send(200);
    });
    console.info("Express server listening for POST requests on port %d", this.address().port);
});