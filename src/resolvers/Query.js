const Query = {
	books: (parent, args, { Books }) => Books,
	book: (parent, args, { Books }) =>
		Books.find((Book) => {
			return Book.id === args.id;
		}),
};

module.exports = Query;
