var graphql = require('graphql');
var tData = require('../type/tData');
var ttData = require('../type/ttData');
var data = require('../../models/data');
var Data = require('../../models/mdData');

var dataQuery = new graphql.GraphQLObjectType({
  name: 'query',
  fields: () => {
    return {
      showData: {
        type: new graphql.GraphQLList(tData),
        resolve: () => {
          /*data akan muncul dalam 10 detik*/
          // return new Promise((resolve, rejected) => {
          //     setTimeout(() => {
          //       resolve(data)
          //     }, 1000);
          //   })

          /*data akan muncul ketika proses selesai*/
          // return data;

          /*data dari database*/
          return new Promise((resolve, rejected) => {
            Data.find((err, data) => {
              if (err) {
                // console.log(err)
                rejected(err)
              } else {
                // console.log(data)
                console.log(typeof data);
                console.log(data);
                resolve(data)
              }
            })
          })
        }
      },
      showSingleData: {
        type: new graphql.GraphQLList(tData),
        args: {
          id: {
            type: graphql.GraphQLInt
          }
        },
        resolve(root, args) {
          return new Promise((resolve, rejected) => {
            Data.find({
              id: args.id
            }, (err, data) => {
              resolve(data)
            })
          })

        }
      }
    }
  }
});

module.exports = new graphql.GraphQLSchema({
  query: dataQuery,
  // mutation: ttData
})