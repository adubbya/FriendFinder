// dependencies
var path = require("path");

// routing
module.exports = function(app) {
    //  survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    // incorrect route will default to Home.html
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
}