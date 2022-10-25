import React from 'react';
import Button from '../../common/Button';
import { Author } from '../../types/Author';

function AuthorItem(props: {
	buttonText: string;
	onAuthorChange: (id: string) => void;
	author: Author;
}) {
	return (
		<div className='inline-flex items-center justify-between'>
			<span>{props.author.name}</span>
			<Button
				text={props.buttonText}
				onClick={() => props.onAuthorChange(props.author.id)}
			/>
		</div>
	);
}

export default AuthorItem;
