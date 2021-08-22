const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		books: [Book!]!
	}
	type Book {
		id: ID!
		title: String!
		price: String!
		category: Category!
		author: Author!
	}
	type Author {
		id: ID!
		name: String!
		books: [Book!]!
	}
	type Category {
		id: ID!
		name: String!
		books: [Book!]!
	}
`;

module.exports = typeDefs;
