import React, { useState } from 'react';

import { CourseInfo, Courses, Header } from './components';

import styles from './App.module.css';
import { mockedAuthorsList, mockedCoursesList } from './constants';

// use mocked data till API implementation
// import { mockedAuthorsList, mockedCoursesList } from './constants';

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {
	const [currentCourseId, setCurrentCourseId] = useState(null);

	const handleShowCourse = (courseId) => {
		setCurrentCourseId(courseId);
	};

	const handleBackButtonClick = () => {
		setCurrentCourseId(null);
	};

	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.wrapper}>
					{!currentCourseId ? (
						<Courses
							coursesList={mockedCoursesList}
							authorsList={mockedAuthorsList}
							handleShowCourse={handleShowCourse}
						/>
					) : (
						<CourseInfo
							coursesList={mockedCoursesList}
							authorsList={mockedAuthorsList}
							showCourseId={currentCourseId}
							onBack={handleBackButtonClick}
						/>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
