const resolvers = {
    Query: {
        hello(root) {
            return 'world';
        }
    },
    Mutation: {
        createHello(root, params) {
            // console.log(" root :: ", root, params);
            return (root || params.test || "bye bye")
        }
    }
};


module.exports = {
    resolvers
};