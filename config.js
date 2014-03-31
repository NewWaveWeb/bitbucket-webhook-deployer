module.exports={
    "host" : "0.0.0.0",
    "port" : 3240,
    // Example repository settings
    "repositories" : {
        "webmail" : {
            "dir" : "/data/www/webmail_dev",
            "user" : "www-data",
            "group" : "www-data"
        },
        "webmail-production" : {
            "dir" : "/data/www/webmail",
            "user" : "www-data",
            "group" : "www-data"
        }
    }
};
