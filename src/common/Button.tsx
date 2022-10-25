import React from 'react';

function Button(props: {
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	text: string;
}) {
	return (
		<div>
			<button
				type={props.type ? props.type : 'button'}
				className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full'
				onClick={props.onClick}
			>
				{props.text}
			</button>
		</div>
	);
}

export default Button;
