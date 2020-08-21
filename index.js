//Express server practice shorter version /node js is shorter version of server set up

// Dependencies
// ===========================================================
const express = require("express");
const path = require('path');
const fs = require('fs');
const public_DIR = path.resolve(__dirname,"public");
const db = require('./develop/db/db.json');
var notes = require("./data/noteData");
 var noteList = require("./data/noteListData");


// ------Express app
const app = express();
//// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 7080;

// Data
// ===========================================================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/', express.static(__dirname));



// Routes
// =========================================================== = line 17 serverSix
htmlRoutes = require("./routes/apiRoutes")(app);
apiRoutes = require("./routes/htmlRoutes")(app);
app.get("/My Notes",function (req, res) {
  res.sendfile(path.join(public_DIR,"notes.html"));
});

app.get("/", function(req, res) {
    res.sendfile(path.join(public_DIR,"index.html"));
});
app.post("/", function(req, res) {
  res.sendfile(path.join(public_DIR,"noteList.html"));
});
app.delete("/", function(req, res) {
  res.sendfile(path.join(public_DIR,"noteList.html"));
// YOUR CODE GOES HERE
//
//
// 
// Need Password generator for delete option unique ID creator





})


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})