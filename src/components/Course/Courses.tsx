import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import CourseCard from './CourseCard';
import SearchBar from './SearchBar';
import { Course } from '../../types/Course';
import { Outlet, useNavigate } from 'react-router-dom';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';

interface CoursesProps {
	onCourseChanged?: () => {};
}

const Courses = (props: CoursesProps) => {
	const navigate = useNavigate();

	const [searchTerm, setSearchTerm] = useState('');
	const [courses, setCourses] = useState<Course[]>(mockedCoursesList);

	useEffect(() => {
		if (searchTerm) return;

		setCourses(mockedCoursesList);
	}, [searchTerm]);

	const filterCourses = () => {
		const filteredItems = courses.filter((c: any) =>
			c.title.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setCourses(filteredItems);
	};

	return (
		<>
			<Outlet />
			<div className='mb-5 flex flex-row justify-between'>
				<SearchBar
					onSearch={(value: any) => setSearchTerm(value)}
					onClick={() => filterCourses()}
				/>
				<Button
					text={'Add new course'}
					onClick={() => navigate('/courses/add')}
				/>
			</div>

			{courses.length ? (
				courses.map((course: any) => (
					<CourseCard
						key={course.id}
						course={course}
						authors={mockedAuthorsList}
					/>
				))
			) : (
				<div className='text-center text-gray-400 text-md border-t pt-2'>
					No Result
				</div>
			)}
		</>
	);
};

export default Courses;
