var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/volunteer-events.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/volLogin.html"));
  });

  app.get("/eventCreate", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/MgrCreateEvent.html"));
  });

  app.get("/getpassword", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/forgotpassword.html"));
  });

  app.get("/mgrlogin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mgrlogin.html"));
  });

  app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/VolCreateAccount.html"));
  });

  app.get("/managers", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/MgrCreateAccount.html"));
  });

};



// var path = require("path");

// // Routes
// // =============================================================
// module.exports = function (app) {

//   // Each of the below routes just handles the HTML page that the user gets sent to.

//   // index route loads view.html
//   app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });



//   app.get("/events", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/VolEventListings.html"));
//   });

//   app.get("/users", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/VolLogin.html"));
//   });

//   app.get("/managerlogin", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/MgrLogIn.html"));
//   });

//   // loads MgrCreateAccount.html


//   // loads MgrEventCreate.html
//   app.get("/eventCreate", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/MgrCreateEvent.html"));
//   });
