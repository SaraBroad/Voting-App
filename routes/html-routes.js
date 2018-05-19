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
    res.sendFile(path.join(__dirname, "../public/users.html"));
  });

  // blog route loads blog.html
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/managers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/managers.html"));
  });
};
