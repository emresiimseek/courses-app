import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';

function Home() {
	let location = useLocation();

	return (
		<>
			<Header key={location.key} />
			<div className='container mx-auto'>
				<Outlet />
			</div>
		</>
	);
}

export default Home;
