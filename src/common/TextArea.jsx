import React from 'react';

function TextArea(props) {
	return (
		<div>
			<label
				htmlFor={props.labelText}
				className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
			>
				{props.labelText}
			</label>
			<textarea
				id={props.labelText}
				required={props.required}
				minLength={props.minLength}
				placeholder={props.placeholderText}
				onChange={(event) => props.onChange(event.target.value)}
				className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
			></textarea>
		</div>
	);
}

export default TextArea;
