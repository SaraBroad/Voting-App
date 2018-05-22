app.post("/api/manager", function (req, res) {
    console.log("req.body = ", req.body);
    db.Manager.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        organization_name: req.body.organization_name,
        city: req.body.city,
        password: req.body.password,
        // passwordConf: req.body.passwordConf    

      })
      .then(function (dbManager) {
        res.json(dbManager);
        console.log("event is through the API-ROUTE");

      });
  });