import React from 'react';

function Button(props) {
	return (
		<div>
			<button
				type={props.type ? props.type : 'button'}
				className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
				onClick={props.onClick}
			>
				{props.text}
			</button>
		</div>
	);
}

export default Button;
