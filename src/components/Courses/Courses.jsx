import React from 'react';

import { Button } from '../../common';
import { CourseCard } from './components';

import styles from './styles.module.css';
import { EmptyCourseList } from './components/EmptyCourseList';

export const Courses = ({ coursesList, authorsList, handleShowCourse }) => {
	return coursesList.length ? (
		<div>
			<div className={styles.courses_button_wrapper}>
				<Button buttonText='Add new' data-testid='addCourse' />
			</div>
			{coursesList.map((course) => (
				<CourseCard
					authorsList={authorsList}
					course={course}
					key={course.id}
					handleShowCourse={handleShowCourse}
				/>
			))}
		</div>
	) : (
		<EmptyCourseList />
	);
};
