const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo server');
  
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a92cca46636e4830a3b64dd")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })
  
  db.collection('Users').findOneAndUpdate({
    name: 'Ben'
  }, {
    $set: {
      name: 'Jenny'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })
  
  //db.close();
});