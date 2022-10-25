import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { LoginApiResponse } from '../../types/common/ApiResponse';
import { User } from '../../types/User';

function Login() {
	const [user, setUser] = useState<User>({ email: '', password: '' });
	const navigate = useNavigate();

	const handleSumbit = (event: any) => {
		event.preventDefault();
		login();
	};

	const login = async () => {
		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result: LoginApiResponse = await response.json();

		if (result.result) {
			localStorage.setItem(
				'user',
				JSON.stringify({ token: result.result, ...result.user })
			);
			navigate('/courses');
		} else result?.errors?.forEach((er) => alert(er));
	};
	return (
		<form
			onSubmit={handleSumbit}
			className='bg-gray-50 lg:w-1/4  w-full p-10  mx-auto rounded flex flex-col gap-5'
		>
			<h1 className='text-2xl text-center'>Login</h1>
			<Input
				value={user.email}
				required
				type='email'
				placeholderText='Enter email'
				labelText='Email'
				onChange={(email) => setUser({ ...user, email })}
			/>
			<Input
				required
				minLength={8}
				type='password'
				value={user.password}
				placeholderText='Enter password'
				labelText='Password'
				onChange={(password) => setUser({ ...user, password })}
			/>
			<div className='w-2/3 mx-auto'>
				<Button text='Login' type='submit' />
			</div>
			<div className='text-sm text-center'>
				If you not have an account you can
				<Link className='underline ml-1 text-blue-800' to={'/registration'}>
					Registeration
				</Link>
			</div>
		</form>
	);
}

export default Login;
