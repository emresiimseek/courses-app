import { useState } from 'react';
import Courses from './components/Course/Courses';
import CreateCource from './components/Course/CreateCourse';
import Header from './components/Header/Header';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	const [isCourse, setIsCourse] = useState(true);
	const [courseList, setCourseList] = useState(mockedCoursesList);

	return (
		<>
			<Header />

			<div className='container mx-auto'>
				{isCourse ? (
					<Courses
						authors={mockedAuthorsList}
						courses={courseList}
						onCourseChanged={() => setIsCourse(!isCourse)}
					/>
				) : (
					<CreateCource
						authors={mockedAuthorsList}
						onCourseChanged={(course) => {
							setCourseList([...mockedCoursesList, course]);
							setIsCourse(!isCourse);
						}}
					/>
				)}
			</div>
		</>
	);
}

export default App;
