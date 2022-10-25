import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { ApiResponse } from '../../types/common/ApiResponse';
import { User } from '../../types/User';

function Registration(props: {}) {
	const [user, setUser] = useState<User>({ email: '', password: '', name: '' });
	const navigate = useNavigate();

	const handleSubmit = (event: any) => {
		event.preventDefault();
		register();
	};

	const register = async () => {
		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result: ApiResponse = await response.json();

		if (result.successful) {
			navigate('/login');
		} else result?.errors?.forEach((er) => alert(er));
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='bg-gray-50 lg:w-1/4  w-full  p-10  mx-auto rounded flex flex-col gap-5'
		>
			<h1 className='text-2xl text-center'>Registration</h1>
			<Input
				value={user.name}
				placeholderText='Enter name'
				labelText='Name'
				minLength={8}
				required
				onChange={(name) => setUser({ ...user, name })}
			/>
			<Input
				value={user.email}
				type='email'
				required
				placeholderText='Enter email'
				labelText='Email'
				onChange={(email) => setUser({ ...user, email })}
			/>
			<Input
				value={user.password}
				placeholderText='Enter password'
				labelText='Password'
				type='password'
				minLength={8}
				onChange={(password) => setUser({ ...user, password })}
			/>
			<div className='w-2/3 mx-auto'>
				<Button text='Registration' type='submit' />
			</div>
			<div className='text-sm text-center'>
				If you have an account you can
				<Link className='underline ml-1 text-blue-800' to={'/login'}>
					Login
				</Link>
			</div>
		</form>
	);
}

export default Registration;
