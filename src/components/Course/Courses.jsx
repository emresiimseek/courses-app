import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import CourseCard from './CourseCard';
import SearchBar from './SearchBar';

const Courses = (props) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [courses, setCourses] = useState(props.courses);

	useEffect(() => {
		if (searchTerm) return;

		setCourses(props.courses);
	}, [props.courses, searchTerm]);

	const filterCourses = () => {
		const filteredItems = courses.filter((c) =>
			c.title.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setCourses(filteredItems);
	};

	return (
		<>
			<div className='mb-5 flex flex-row justify-between'>
				<SearchBar
					onSearch={(value) => setSearchTerm(value)}
					onClick={() => filterCourses()}
				/>
				<Button text={'Add new course'} onClick={props.onCourseChanged} />
			</div>

			{courses.length ? (
				courses.map((course) => (
					<CourseCard key={course.id} course={course} authors={props.authors} />
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
