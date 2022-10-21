import React from 'react';
import Button from '../../common/Button';

function AuthorItem(props) {
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
