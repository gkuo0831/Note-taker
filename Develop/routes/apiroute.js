const fs = require("fs");
const cuid = require("cuid");
const util = require("util");

const newNote = require("../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", function (req, res) {
    res.json(newNote);
  });

  app.post("/api/notes", function (req, res) {
    const id = cuid();
    newNote.push({ ...req.body, id });

    fs.writeFileSync("Develop/db/db,json", JSON.stringify(newNote));

    res.json(newNote);
  });
  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    const newData = noteNote.filter((note) => note.id !== id);
    fs.writeFileSync("Develop/db/db.json", JSON.stringify(newNote));
    console.log(newNote);
    res.send(JSON.stringify(newNote));
  });
};
