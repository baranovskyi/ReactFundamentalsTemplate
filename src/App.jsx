import React from 'react';

import { CourseInfo, Courses, Header } from './components';

import styles from './App.module.css';
import { mockedAuthorsList, mockedCoursesList } from './constants';

// use mocked data till API implementation
// import { mockedAuthorsList, mockedCoursesList } from './constants';

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {
	// write your code here

	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<Courses
						coursesList={mockedCoursesList}
						authorsList={mockedAuthorsList}
					/>

					<CourseInfo
						course={mockedCoursesList[0]}
						authorsList={mockedAuthorsList}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
