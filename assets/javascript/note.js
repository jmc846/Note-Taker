//Express server practice shorter version /node js is shorter version of server set up

// Dependencies
// ===========================================================
const express = require("express");
const path = require('path');
const fs = require('fs');
const public_DIR = path.resolve(__dirname,"assets");
const db = require('./db/db.json');
// ------Express app
var app = express();
var PORT = 8080;

// Data
// ===========================================================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/', express.static(__dirname));

//

// Routes
// =========================================================== = line 17 serverSix
app.get("/My Notes", (req, res) {
  res.sendfile(path.join(public_DIR,"notes.html"));
});

app.get("/", function(req, res) {
    res.sendfile(path.join(public_DIR,"index.html"));
});

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
