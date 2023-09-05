import React from 'react';

import { Button } from '../../common';
import { mockedCoursesList } from '../../constants';
import { CourseInfo } from '../CourseInfo';
import { CourseCard } from './components';

import styles from './styles.module.css';

export const Courses = ({ coursesList, authorsList, handleShowCourse }) => {
	const isListEmpty = !mockedCoursesList.length;
	// write your code here

	// for EmptyCourseListComponent container use data-testid="emptyContainer" attribute
	// for button in EmptyCourseListComponent add data-testid="addCourse" attribute
	if (isListEmpty) {
		return (
			<>
				<div className={styles.panel}>
					<div className={styles.wrapper}>
						<h1 className={styles.title}>Your list is empty</h1>
						<p>Please use 'Add New Course' button to add your first course</p>
						<div className={styles.empty_list_button_wrapper}>
							<Button buttonText='Add new course' data-testid='addCourse' />
						</div>
					</div>
				</div>
			</>
		);
	} else {
	}
	return (
		<>
			<div className={styles.courses_button_wrapper}>
				<Button buttonText='Add new' data-testid='addCourse' />
			</div>
			{mockedCoursesList.map((course) => (
				<CourseCard course={course} key={course.id} />
			))}
		</>
	);
};
