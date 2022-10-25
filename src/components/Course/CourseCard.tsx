import React from 'react';
import Button from '../../common/Button';
import { Author } from '../../types/Author';
import { Course } from '../../types/Course';
import { useNavigate } from 'react-router-dom';
import CourseDetail from './CourseDetail';

function CourseCard(props: { authors: Author[]; course: Course }) {
	const navigate = useNavigate();

	return (
		<div className='border border-gray-300 rounded gap-5 flex flex-row p-5 mb-5'>
			<div className='flex-2'>
				<h1 className='text-2xl'>{props.course.title}</h1>
				<article>{props.course.description}</article>
			</div>
			<div className='flex-1'>
				<CourseDetail authors={props.authors} course={props.course} />
				<div className='flex justify-center py-5 '>
					<Button
						text={'Show Course'}
						onClick={() => navigate('/courses/' + props.course.id)}
					/>
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
