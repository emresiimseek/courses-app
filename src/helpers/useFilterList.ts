import { Author } from '../types/Author';

export const filterAuthorList = (
	authors: Author[],
	selectedAuthors: Author[],
	currentAuthorId: string,
	type?: string
): { newAuthors: Author[]; newSelectedAuthors: Author[] } => {
	let newAuthors: Author[] = [];
	let newSelectedAuthors: Author[] = [];

	if (type === 'add') {
		const selected = authors.find((aut) => aut.id === currentAuthorId);

		if (!selected) return { newAuthors: [], newSelectedAuthors: [] };

		newAuthors = authors.filter((aut) => aut.id !== selected.id);
		newSelectedAuthors = [...selectedAuthors, selected];
	} else {
		const selected = selectedAuthors.find((aut) => aut.id === currentAuthorId);
		if (!selected) return { newAuthors: [], newSelectedAuthors: [] };

		newAuthors = [...authors, selected];
		newSelectedAuthors = selectedAuthors.filter(
			(aut) => aut.id !== selected.id
		);
	}

	return { newAuthors, newSelectedAuthors };
};
