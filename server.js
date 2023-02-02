const express = require("express");
const api = require("./routes/notesAPI.js");
const html = require("./routes/notesHTML.js");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));

// Connect to the other needed js
app.use(api);
app.use(html);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
