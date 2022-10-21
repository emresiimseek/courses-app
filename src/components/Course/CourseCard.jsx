import React from 'react';
import Button from '../../common/Button';
import { dateFormat } from '../../helpers/dateFormat';
import { toHoursAndMinutes } from '../../helpers/getCourceDuration';

function CourseCard(props) {
	const getAuthors = () =>
		props.authors.filter((aut) => props.course.authors.includes(aut.id));
	return (
		<div className='border border-gray-300 rounded gap-5 flex flex-row p-5 mb-5'>
			<div className='flex-2'>
				<h1 className='text-2xl'>{props.course.title}</h1>
				<article>{props.course.description}</article>
			</div>
			<div className='flex-1'>
				<div>
					<span className='font-bold mr-1'>Authors:</span>
					{getAuthors()
						.map((x) => x.name)
						.join(',')}
				</div>
				<div>
					<span className='font-bold mr-1'>Duration:</span>
					{toHoursAndMinutes(props.course.duration)}
				</div>
				<div>
					<span className='font-bold mr-1'>Created:</span>
					{dateFormat(props.course.creationDate)}
				</div>
				<div className='flex justify-center py-5 '>
					<Button text={'Show Course'} />
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
