var express = require("express");
var morgan = require("morgan");

// Hostname and Port

var port = process.env.PORT;

// Init App
var app = express();

// User Morgan Logger Middleware
app.use(morgan("dev"));

app.get("/", function(req, res) {
    //console.log(req.connection.remoteAddress);
    res.json({
        IP: req.headers["x-forwarded-for"],
        OS: req.headers["user-agent"].match(/\(.*?\)/)[0],
        lang: req.headers["accept-language"].split(",")[0]
    });
});

app.get("*", function(req, res) {
    res.status(404).json({
        success: false,
        message: "404: Page Not Found"
    });
});

app.listen(port, function() {
    console.log("Server running on port: " + port);
});