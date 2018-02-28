// load data 
var friendsData = require("../data/friends")

// routing
module.exports = function (app) {

// API Requests
    // get friends
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        console.log(friendsData);
    });
}
 /*   // post friends
    app.post("/api/friends", function (req, res) {
        // body-parser
        friendsData.push(req.body);
        res.json(true);
        // comparison function
    });

    // might add post clear for testing
*/

