import React from 'react';

import { Courses, Header } from './components';

import styles from './App.module.css';

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
					<Courses />
				</div>
			</div>
		</>
	);
}

export default App;
