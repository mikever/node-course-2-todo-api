const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5a65b60c2c517f7e1f63994f';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log(e);
});


// let id = '5a684d286dbda5c839f6199811';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('ID not found');
//     }
//     console.log('Todo by ID', todo);
//   }).catch((e) => {
//     console.log(e);
//   })

// const {ObjectID} = require('mongodb');

// const {mongoose} = require('./../server/db/mongoose');
// const {Todo} = require('./../server/models/todo');

// const {User} = require('./../server/models/user');

// let id = '5a30e434f45face53aae4081';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// User.findById(id).then((user) => {
//   if (!user) {
//     return console.log('User not found');
//   }
//   console.log('User by ID', JSON.stringify(user, undefined, 2));
// }).catch((e) => {
//   console.log(e);
// });

// //
// // if (!ObjectID.isValid(id)) {
// //   console.log('ID not valid');
// // }

// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos);
// // });
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log('Todo', todo);
// // });

// // Todo.findById(id).then((todo) => {
// //   if (!todo) {
// //     return console.log('ID not found');
// //   }
// //   console.log('Todo by ID', todo);
// // }).catch((e) => {
// //   console.log(e);
// // });
