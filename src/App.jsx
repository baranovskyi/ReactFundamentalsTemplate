import React, { useEffect } from 'react';

import {
	CourseForm,
	CourseInfo,
	Courses,
	Header,
	Login,
	Registration,
} from './components';

import styles from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { mockedAuthorsList } from './constants';
import { useDispatch } from 'react-redux';
import { getAuthors, getCourses } from './services';
import { setCourses } from './store/slices/coursesSlice';
import { setAuthors } from './store/slices/authorsSlice';

function App() {
	const token = localStorage.getItem('token');
	const defaultPage = token ? 'courses' : 'login';
	const dispatch = useDispatch();

	useEffect(() => {
		getCourses().then(({ result }) => {
			dispatch(setCourses(result));
		});

		getAuthors().then(({ result }) => {
			dispatch(setAuthors(result));
		});
	}, [dispatch]);

	return (
		<>
			<Header />

			<div className={styles.container}>
				<Routes>
					<Route path='*' element={<Navigate to='/' />} />
					<Route path='/' element={<Navigate to={defaultPage} />} />
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route path='courses' element={<Courses />}></Route>
					<Route path='courses/:courseId' element={<CourseInfo />} />
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
