// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').find({
    name: 'Mike Veronie'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close();
});
