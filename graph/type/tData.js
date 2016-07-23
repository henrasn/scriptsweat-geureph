var graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
  name: 'data',
  fields: () => {
    return {
      // id: {
      //   type: graphql.GraphQInt
      // },
      title: {
        type: graphql.GraphQLString
      },
      completed: {
        type: graphql.GraphQLBoolean
      }
    }
  }
});