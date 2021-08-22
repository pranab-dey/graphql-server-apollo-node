const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { Books, Categories, Authors } = require('./db');
const Query = require('./resolvers/Query');

const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
	},
	context: {
		Books,
		Categories,
		Authors,
	},
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
