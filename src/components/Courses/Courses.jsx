import React, { useEffect } from 'react';
import { Button } from '../../common';
import { CourseCard } from './components';
import styles from './styles.module.css';
import { EmptyCourseList } from './components/EmptyCourseList';
import { Link } from 'react-router-dom';
import { getCoursesList } from '../../store/selectors';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../services';
import store from '../../store';

export const Courses = () => {
	const coursesList = useSelector(getCoursesList);
	const isAdmin = useSelector((state) => state.user.role === 'admin');

	useEffect(() => {
		store.dispatch(getCurrentUser());
	}, []);

	return coursesList.length ? (
		<div>
			<div className={styles.courses_button_wrapper}>
				<Link to='/courses/add'>
					{isAdmin && <Button buttonText='Add new' data-testid='addCourse' />}
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
