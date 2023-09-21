import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
	CourseForm,
	CourseInfo,
	Courses,
	Login,
	Registration,
} from './components';
import { mockedAuthorsList, mockedCoursesList } from './constants';

const root = ReactDOM.createRoot(document.getElementById('root'));
const token = localStorage.getItem('token');
const defaultPage = token ? 'courses' : 'login';

root.render(
	<BrowserRouter>
		<Routes>
			<Route path='*' element={<Navigate to='/' />} />
			<Route path='/' element={<App />}>
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
			</Route>
		</Routes>
	</BrowserRouter>
);
