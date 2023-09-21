import React from 'react';

import {
	CourseForm,
	CourseInfo,
	Courses,
	Header,
	Login,
	Registration,
} from './components';

import styles from './App.module.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { mockedAuthorsList, mockedCoursesList } from './constants';

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {
	const token = localStorage.getItem('token');
	const defaultPage = token ? 'courses' : 'login';

	return (
		<>
			<Header />

			<div className={styles.container}>
				<Routes>
					<Route path='*' element={<Navigate to='/' />} />
					<Route path='/' element={<Navigate to={defaultPage} />} />
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route
						path='courses'
						element={
							<Courses
								coursesList={mockedCoursesList}
								authorsList={mockedAuthorsList}
							/>
						}
					></Route>
					<Route
						path='courses/:courseId'
						element={
							<CourseInfo
								coursesList={mockedCoursesList}
								authorsList={mockedAuthorsList}
							/>
						}
					/>
					<Route
						path='courses/add'
						element={<CourseForm authorsList={mockedAuthorsList} />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
