import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	Outlet,
} from 'react-router-dom';
import Login from './components/Login/Login';
import Courses from './components/Course/Courses';
import CourseInfo from './components/Course/CourseInfo';
import CreateCourse from './components/Course/CreateCourse';
import Registration from './components/Registration/Registration';
import Home from './components/Home/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}>
					<Route path='courses' element={<Outlet />}>
						<Route index element={<Courses />} />
						<Route path=':courseId' element={<CourseInfo />} />
						<Route path='add' element={<CreateCourse />} />
					</Route>
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />

					<Route path='*' element={<Navigate to='/' />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
