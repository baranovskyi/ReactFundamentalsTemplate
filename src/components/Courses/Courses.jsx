import React from 'react';
import { Button } from '../../common';
import { CourseCard } from './components';
import styles from './styles.module.css';
import { EmptyCourseList } from './components/EmptyCourseList';
import { Link } from 'react-router-dom';
import { getCoursesList } from '../../store/selectors';
import { useSelector } from 'react-redux';

export const Courses = () => {
	const coursesList = useSelector(getCoursesList);

	return coursesList.length ? (
		<div>
			<div className={styles.courses_button_wrapper}>
				<Link to='/courses/add'>
					<Button buttonText='Add new' data-testid='addCourse' />
				</Link>
			</div>
			{coursesList.map((course) => (
				<CourseCard course={course} key={course.id} />
			))}
		</div>
	) : (
		<EmptyCourseList />
	);
};
