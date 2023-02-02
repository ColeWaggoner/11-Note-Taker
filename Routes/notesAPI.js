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


module.exports = router;