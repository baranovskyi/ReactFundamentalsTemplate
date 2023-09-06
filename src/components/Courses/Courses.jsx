import React from 'react';

import { Button } from '../../common';
import { mockedCoursesList } from '../../constants';
import { CourseCard } from './components';

import styles from './styles.module.css';
import { EmptyCourseList } from './components/EmptyCourseList';

export const Courses = ({ coursesList, authorsList, handleShowCourse }) => {
	const isListEmpty = !mockedCoursesList.length;
	// write your code here

	if (isListEmpty) {
		return (
			<div className={styles.empty_list_wrapper} data-testid='emptyContainer'>
				<EmptyCourseList />
			</div>
		);
	} else {
		return (
			<>
				<div className={styles.courses_button_wrapper}>
					<Button buttonText='Add new' data-testid='addCourse' />
				</div>
				{coursesList.map((course) => (
					<CourseCard
						authorsList={authorsList}
						course={course}
						key={course.id}
					/>
				))}
			</>
		);
	}
};
