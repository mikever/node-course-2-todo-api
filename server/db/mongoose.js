let mongoose = require('mongoose');

let key = require('./keys/keys');

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: `mongodb://mikever:iyw4pp4w@M@ds161016.mlab.com:61016/mv-node-todo-api`
}

mongoose.Promise = global.Promise;
mongoose.connect(db.mlab || db.localhost);

module.exports = {mongoose};
