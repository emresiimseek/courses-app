import React from 'react';

function CreateCourseSection(props: { title: string; children: any }) {
	return (
		<div className='flex-1'>
			<div className='flex flex-col gap-5'>
				<h1 className='text-center text-xl'>{props.title}</h1>
				{props.children}
			</div>
		</div>
	);
}

export default CreateCourseSection;
