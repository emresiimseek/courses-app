import React from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { SEARCH_BUTTON_TEXT, SEARCH_INPUT_TEXT } from '../../constants';

function SearchBar(props: any) {
	return (
		<div className='inline-flex gap-5 w-2/4'>
			<Input placeholderText={SEARCH_INPUT_TEXT} onChange={props.onSearch} />
			<Button text={SEARCH_BUTTON_TEXT} onClick={props.onClick} />
		</div>
	);
}

export default SearchBar;
