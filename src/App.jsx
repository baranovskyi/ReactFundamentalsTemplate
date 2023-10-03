import React, { useEffect } from 'react';

import {
	CourseForm,
	CourseInfo,
	Courses,
	Header,
	Login,
	PrivateRoute,
	Registration,
} from './components';

import styles from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { mockedAuthorsList } from './constants';
import { useDispatch } from 'react-redux';
import { getAuthors, getCourses, getCurrentUser } from './services';
import store from './store';

function App() {
	const token = localStorage.getItem('token');
	const defaultPage = token ? 'courses' : 'login';
	const dispatch = useDispatch();

	useEffect(() => {
		store.dispatch(getCourses());
		store.dispatch(getAuthors());
		store.dispatch(getCurrentUser());
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
						element={
							<PrivateRoute>
								<CourseForm authorsList={mockedAuthorsList} />
							</PrivateRoute>
						}
					/>
					<Route
						path='courses/update/:id'
						element={
							<PrivateRoute>
								<CourseForm authorsList={mockedAuthorsList} />
							</PrivateRoute>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
