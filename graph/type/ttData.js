var graphql = require('graphql');
var mData = require('../mutations/mAdd');

module.exports = new graphql.GraphQLObjectType({
  name: 'mutation',
  fields: {
    add: mData
  }
})