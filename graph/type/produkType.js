var graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
  name: 'produkType',
  fields: () => {
    return {
      sku: {
        type: graphql.GraphQLString
      },
      name: {
        type: graphql.GraphQLString
      },
      des: {
        type: graphql.GraphQLString
      },
      price: {
        type: graphql.GraphQLInt
      },
      image: {
        type: graphql.GraphQLString
      },
      brand: {
        type: graphql.GraphQLString
      }
    }
  }
})