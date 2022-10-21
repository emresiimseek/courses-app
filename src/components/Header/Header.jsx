import React from 'react';
import Button from '../../common/Button';
import Logo from '../../common/Logo';
import { HEADER_USER_TEXT, LOGOUT_BUTTON_TEXT } from '../../constants';

function Header() {
	return (
		<div className='bg-slate-100 '>
			<div className='flex justify-between py-5 mb-10 container mx-auto'>
				<Logo
					image={
						'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'
					}
				/>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div className='mr-10'>{HEADER_USER_TEXT}</div>
					<Button text={LOGOUT_BUTTON_TEXT} />
				</div>
			</div>
		</div>
	);
}

export default Header;
