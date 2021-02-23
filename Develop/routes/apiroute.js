const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  fs.readFile("../db/db.json");

  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });
};
