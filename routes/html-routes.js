var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/users", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/users.html"));
  });

  app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/mgrlogin", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/mgrlogin.html"));
  });

  // this is new--loads MgrCreateAccount.html
  app.get("/managers", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/MgrCreateAccount.html"));
  });

  // this is new--loads MgrEventCreate.html
  app.get("/eventCreate", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/MgrTaskCreate.html"));
  });

  // this is new -- loads MgrEventListings.html
  app.get("/api/events", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/MgrEventListings.html"));
  });




};