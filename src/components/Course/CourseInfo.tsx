import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Course } from '../../types/Course';
import CourseDetail from './CourseDetail';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';

function CourseInfo() {
	const [course, setCourse] = useState<Course>();

	const params = useParams();

	useEffect(() => {
		console.log('selam');

		const currentCourse = mockedCoursesList.find(
			(c) => c.id === params.courseId
		);

		setCourse(currentCourse);
	}, []);

	return (
		<div>
			<Link to={'/courses'}>← Back To Courses</Link>
			<div className='text-center text-2xl'>{course?.title}</div>
			<div className='grid grid-cols-12 gap-3 my-5'>
				<div className='col-span-8 '>{course?.description}</div>
				<div className='col-span-4 '>
					{course && (
						<CourseDetail authors={mockedAuthorsList} course={course} />
					)}
				</div>
			</div>
		</div>
	);
}

export default CourseInfo;
