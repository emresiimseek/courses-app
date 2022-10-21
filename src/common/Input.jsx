import React from 'react';

function Input(props) {
	return (
		<div className='w-full'>
			{props.labelText && (
				<label
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					htmlFor={props.labelText}
				>
					{props.labelText}
				</label>
			)}
			<input
				required={props.required}
				minLength={props.minLength}
				type='text'
				value={props.value}
				className='bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				id={props.labelText}
				placeholder={props.placeholderText}
				onChange={(event) => props.onChange(event.target.value)}
			/>
		</div>
	);
}

export default Input;
