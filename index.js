let express = require('express');
let mongodb = require('mongodb');
// Constants
let PORT = 8080;

// App
let app = express();
app.get('/*', function (req, res) {
  // TODO: this doesn't return proper headers for nginx cache to HIT properly
  res.send('Hello world\n Check console for db connection info');
});

// Retrieve
let MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://mongo:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  } else {
    console.log("no connection to db OH NOS!!");
  }
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
