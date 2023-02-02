const router = require("express").Router();
const fs = require("fs");
// For random ID
const uuid = require("uuid");

// Sends db.json for adding to HTML page list
router.get("/api/notes", (req, res) =>
  fs.readFile("./db/db.json", (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
);

router.post("/api/notes", (req, res) => {
  const noteList = JSON.parse(fs.readFileSync("./db/db.json"));
  // Adds new note by reading the request body
  const addNote = req.body;
  // Adds random ID to note
  addNote.id = uuid.v4();
  notes.push(addNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(noteList);
});

module.exports = router;
