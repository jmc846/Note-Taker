// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on note-data, Notelist, etc.
// ===============================================================================

var note = require("../data/noteData");
var noteList = require("../data/noteListData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  app.get("/api/noteList", function(req, res) {
    res.json(noteListData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a Note or not.
    // It will do this by sending out the value "true" have a note
    var Record = req.body;
    Record.id = Math.floor(Math.random() * 100000000);
    // req.body is available since we're using the body parsing middleware
    if (noteData.length < 5) {
      noteData.push(Record);
      // send a JSON string with the value true
      res.json(true);
    }
    else {
      noteListData.push(Record);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the note while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    noteData.length = 0;
    noteListData.length = 0;

    res.json({ ok: true });
  });
};
