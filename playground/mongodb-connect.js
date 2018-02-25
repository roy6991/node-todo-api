const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo server');
  
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })
  
  // Insert new doc into Users(name, age, location)
  
  // db.collection('Users').insertOne({
  //   name: 'Roy',
  //   age: 22,
  //   location: 'Hong Kong'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  // 
  //   console.log(JSON.stringify(result.ops[0]._id));
  // })
  
  db.close();
});