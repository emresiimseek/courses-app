import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import Logo from '../../common/Logo';
import { User } from '../../types/User';

function Header() {
	const navigate = useNavigate();
	let location = useLocation();

	const [user, setUser] = useState<User>();

	useEffect(() => {
		getUser();
	}, []);

	const getUser = async () => {
		const result: User = await JSON.parse(localStorage.getItem('user') ?? '');
		setUser(result);
	};

	return (
		<div className='bg-slate-100 '>
			<div className='flex justify-between py-5 mb-10 container mx-auto'>
				<Logo
					image={
						'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg'
					}
				/>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div className='mr-10 uppercase'>{user?.name}</div>
					{location.pathname !== '/login' &&
						location.pathname !== '/registration' && (
							<Button
								onClick={() => {
									if (user) localStorage.clear();
									navigate('login');
								}}
								text={user ? 'Logout' : 'Login'}
							/>
						)}
				</div>
			</div>
		</div>
	);
}

export default Header;
