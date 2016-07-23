var graphql = require('graphql');
var todoList = require('../../models/todoModel');
var userModel = require('../../models/userModel');
var mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1/todos');

var TODOs = [{
  "id": 22,
  "title": "Read emails",
  "completed": false
}, {
  "id": 1446412740883,
  "title": "Buy orange",
  "completed": true
}];

var todoType = new graphql.GraphQLObjectType({
  name: 'todo',
  fields: function() {
    return {
      _id: {
        type: graphql.GraphQLString
      },
      name: {
        type: graphql.GraphQLString
      }
      // completed: {
      //   type: graphql.GraphQLBoolean
      // }
    }
  }
});

var queryType = new graphql.GraphQLObjectType({
  name: 'query',
  fields: () => {
    return {
      todos: {
        type: new graphql.GraphQLList(todoType),
        resolve: () => {
          // return TODOs;
          return (req, res) => {
            userModel.find((err, data) => {
              if (err) {
                res.send(err);
                console.log(err);
              } else {
                res.json(data);
              }
            })
          }
        }
      }
    }
  }
});

var mutationAdd = {
  type: new graphql.GraphQLList(todoType),
  description: 'add to todo',
  args: {
    title: {
      name: 'toto',
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    }
  },
  resolve: (root, args) => {
    var newTodo = new todoList({
      title: args.title,
      completed: false
    });
    console.log(args);
    console.log(root);
    newTodo.save((err) => {
      if (err)
        res.send(err)
    })
    // return todos.find().pretty();
  }
}

var mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    add: mutationAdd
  }
});

module.exports = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutationType
});