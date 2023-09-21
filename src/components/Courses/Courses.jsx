import React from 'react';

import { Button } from '../../common';
import { CourseCard } from './components';

import styles from './styles.module.css';
import { EmptyCourseList } from './components/EmptyCourseList';
import { Link } from 'react-router-dom';

export const Courses = ({ coursesList, authorsList }) => {
	return coursesList.length ? (
		<div>
			<div className={styles.courses_button_wrapper}>
				<Link to='/courses/add'>
					<Button buttonText='Add new' data-testid='addCourse' />
				</Link>
			</div>
			{coursesList.map((course) => (
				<CourseCard authorsList={authorsList} course={course} key={course.id} />
			))}
		</div>
	) : (
		<EmptyCourseList />
	);
};
