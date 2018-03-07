const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

Todo.remove({}).then(result => {
  console.log(result);
});

//Todo.findOneAndRemove({})
//Todo.findByIdAndRemove(id)
// Todo.findOneAndRemove({ _id: id}).then(todo => {
//     console.log(todo);
// })
Todo.findByIdAndRemove('5a9bffc907ecbaece78e99d4').then(todo => {
    console.log(todo);
})
