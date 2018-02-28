// load data 
var friendsData = require("../data/friends")

// routing
module.exports = function (app) {

    // API GET Requests
    // GET friends
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        console.log(friendsData);
    });
}

// get 

// post


