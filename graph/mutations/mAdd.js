var graphql = require('graphql');
var tData = require('../type/tData');
var Data = require('../../models/mdData');

var mutationAdd = {
  type: tData,
  decription: 'add data',
  args: {
    title: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    }
  },
  resolve: (root, args) => {
    console.log(root);
    console.log(args);

    var newData = new Data({
      title: args.title,
      completed: false
    })

    new Promise((resolve, rejected) => {
      newData.save((err) => {
        if (err)
          rejected(err)
        else
          resolve(newData)
      })
    })
  }
}

module.exports = mutationAdd;