const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

todo.findOneAndRemove({_id: 'someidhere'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('asd').then((todo) => {
  console.log(todo);
});
