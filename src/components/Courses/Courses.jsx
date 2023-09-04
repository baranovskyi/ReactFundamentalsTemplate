import React from 'react';

import styles from './styles.module.css';

export const Courses = ({ coursesList, authorsList, handleShowCourse }) => {
	// write your code here

	// for EmptyCourseListComponent container use data-testid="emptyContainer" attribute
	// for button in EmptyCourseListComponent add data-testid="addCourse" attribute

	return (
		<>
			<div className={styles.panel}>
				// reuse Button component for 'Add new course' button
			</div>
			// use '.map' to render all courses. Use CourseCard component
		</>
	);
};
