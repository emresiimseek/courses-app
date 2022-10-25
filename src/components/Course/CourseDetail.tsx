import React from 'react';
import { dateFormat } from '../../helpers/dateFormat';
import { toHoursAndMinutes } from '../../helpers/getCourceDuration';
import { Author } from '../../types/Author';
import { Course } from '../../types/Course';

function CourseDetail(props: { course: Course; authors: Author[] }) {
	const getAuthors = () =>
		props.authors.filter((aut: any) => props.course.authors.includes(aut.id));
	return (
		<div className='flex-1'>
			<div>
				<span className='font-bold mr-1'>Authors:</span>
				{getAuthors()
					.map((x: any) => x.name)
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
		</div>
	);
}

export default CourseDetail;
