const typeDefs = [`
                    type Query {
                      hello: String
                    }
                    
                    type Mutation {
                      createHello(test: String!) : String
                    }
                    
                    schema {
                      query: Query,
                      mutation: Mutation
                    }`
                ];

module.exports = {
    typeDefs
};