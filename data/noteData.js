// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var noteArray = [
  {
    title: "Ahmed",
    priority: "Urgent",
    uniqueID: "afhaque89",
    body: ""
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = noteData;

// TODO: Write code to define and export the Employee class
// class Note {
//   constructor(title,priority,id, body) {
//       this.title = name;      
//       this.priority = priority;
//       this.id = id;
//       this.body = body;

  
//   }
//   getId() {
//       return this.id;
//   }
  




// }

// module.exports = Note