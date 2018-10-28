//Change this later
var MongoClient = require('mongodb').MongoClient;//To interact with the database
var url = "mongodb://localhost:27017/"; //location of the database
var Promise = require('rsvp').Promise;

module.exports = {
    FindinCol1: function() {
      return MongoClient.connect('mongodb://localhost:27017').then(function(db, err) {
          const database = db.db('visitors');
          const myCollection = database.collection('students');
        //var collection = db.collection('students');
        console.log('dbOutput');
        console.log(myCollection);
        return myCollection.find().toArray();
      }).then(function(items) {
        console.log('items [Array]:',items);
        return items;
      });
    }
  };
  
  
  // app.js

      
//   db.FindinCol1().then(function(items) {
//     console.info('The promise was fulfilled with items!', items);
//   }, function(err) {
//     console.error('The promise was rejected', err, err.stack);
//   });
/*
    var cursor = db.collection('people').find({
        "bcNumber": "M17027657",
        "fName": "Matt",
        "lName": "Maxwell"
    });
    cursor.find().toArray(function (err, items){
        console.log(items);
    })*/
/*
    function iterateFunc(doc) {
        console.log(JSON.stringify(doc, null, 4));
     }
     
     function errorFunc(error) {
        console.log(error);
     }
     
     cursor.forEach(iterateFunc, errorFunc);
    */