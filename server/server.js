// import { ObjectID } from '../../../../.cache/typescript/2.6/node_modules/@types/bson';

const express = require('express');
const bodyParser = require('body-parser');
let {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};


/************************/

// require('./config/config');

// const _ = require('lodash');
// const express = require('express');
// const bodyParser = require('body-parser');
// const {ObjectID} = require('mongodb');

// let {mongoose} = require('./db/mongoose');
// let {Todo} = require('./models/todo');
// let {User} = require('./models/user');

// let app = express();
// const port = process.env.PORT;

// app.use(bodyParser.json());

// app.post('/todos', (req, res) => {
//   let todo = new Todo({
//     text: req.body.text
//   });

//   todo.save().then((doc) => {
//     res.send(doc);
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });

// app.get('/todos', (req, res) => {
//   Todo.find().then((todos) => {
//     res.send({todos});
//   }, (e) => {
//     res.status(400).send(e);
//   })
// });

// // GET /todos/1234321
// app.get('/todos/:id', (req, res) => {
//   let id = req.params.id;

//   if (!ObjectID.isValid(id)) {
//       return res.status(404).send();
//     }

//   Todo.findById(id).then((todo) => {
//     if (!todo) {
//       return res.status(404).send();
//     }
//     res.send({todo});
//   }).catch((e) => {
//     res.status(400).send();
//   });
// });

// app.delete('/todos/:id', (req, res) => {
//   let id = req.params.id;

//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }

//   Todo.findById(id).then((todo) => {
//     if (!todo) {
//       return res.status(404).send();
//     }
//     res.send({todo});
//   }).catch((e) => {
//     res.status(400).send();
//   });
// });

// app.patch('/todos/:id', (req, res) => {
//   let id = req.params.id;
//   let body = _.pick(req.body, ['text', 'completed']);

//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }

//   if (_.isBoolean(body.completed) && body.completed) {
//     body.completedAt = new Date().getTime();
//   } else {
//     body.completed = fale;
//     body.completedAt = null;
//   }

//   Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
//     if (!todo) {
//       return res.status(404).send();
//     }
//     res.send({todo});
//   }).catch((e) => {
//     res.status(400).send();
//   })
// });

// // POST /users
// app.post('/users', (req, res) => {
//   let body = _.pick(req.body, ['email', 'password']);
//   let user = new User(body);

//   user.save().then((user) => {
//     res.send(user);
//   }).catch((e) => {
//     res.status(400).send(e);
//   })
// })

// app.listen(port, () => {
//   console.log(`Started up at port ${port}`);
// });

// module.exports = {app};
