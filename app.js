var express = require("express");
var morgan = require("morgan");

// Hostname and Port

var port = process.env.PORT;

// Init App
var app = express();


// User Morgan Logger Middleware
app.use(morgan("dev"));


app.get("/", function(req, res) {
    console.log(req.headers);
    res.json({
        IP: req.headers["x-forwarded-for"],
        OS: req.headers["user-agent"],
        lang: req.headers["accept-language"]
    });
});






app.listen(port, function() {
    console.log("Server running on port: " + port);
});