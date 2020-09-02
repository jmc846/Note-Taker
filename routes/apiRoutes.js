// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on note-data, Notelist, etc.
// ===============================================================================

const path = require('path');
const fs = require('fs');
let noteInfo = require('../db/db.json')


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function (req, res) {

    res.json(noteInfo);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a Note or not.
    // It will do this by sending out the value "true" have a note
    let record = { id: req.body.id, title: req.body.title, text: req.body.text };

    id = Math.floor(Math.random() * 100000000);
    //push the note object to the noteBook array
    noteInfo.push(record);

    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(noteInfo), err => {
      if (err) throw err
      res.send(record);
      // console.log("post");
    })
  })
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the note while working with the functionality.
    // Don"t worry about it!
    app.delete("/api/notes/:id", function (req, res) {
      // Empty out the arrays of data
      // read all notes from the db.json file, return all notes EXCEPT the target
      let target = req.body.id;
      fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) throw err
        noteInfo = JSON.parse(id).filter((record) => {
          return record!== target
        })
      })
      //and then rewrite the rest of the notes to the db.json file
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(noteInfo), err => {
        if (err) throw err
        res.send(noteInfo);
        // console.log("deleted")
      })
    
    })
  }
