// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // managers route loads managers.html
    app.get("/managers", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/managers.html"));
    });

    // users route loads users.html
    app.get("/users", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/users.html"));
    });

    // home route loads index.html
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};