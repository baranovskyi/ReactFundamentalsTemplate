import React from 'react';

import { Header } from './components';

import styles from './App.module.css';
import { Outlet } from 'react-router-dom';

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {
	return (
		<>
			<Header />

			<div className={styles.container}>
				<Outlet />
			</div>
		</>
	);
}

export default App;
