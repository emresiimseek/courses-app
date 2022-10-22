export const filterAuthorList = (
	authors,
	selectedAuthors,
	currentAuthorId,
	type
) => {
	let newAuthors = [];
	let newSelectedAuthors = [];

	if (type === 'add') {
		const selected = authors.find((aut) => aut.id === currentAuthorId);

		newAuthors = authors.filter((aut) => aut.id !== selected.id);
		newSelectedAuthors = [...selectedAuthors, selected];
	} else {
		const selected = selectedAuthors.find((aut) => aut.id === currentAuthorId);
		newAuthors = [...authors, selected];
		newSelectedAuthors = selectedAuthors.filter(
			(aut) => aut.id !== selected.id
		);
	}

	return { newAuthors, newSelectedAuthors };
};
