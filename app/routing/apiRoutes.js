let friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("api/survey", function (req, res) {
        res.json(surveyData);
    })

    app.post("api/survey", function(req, res) {

    })

}