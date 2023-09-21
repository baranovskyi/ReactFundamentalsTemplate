import React from 'react';

import { Button } from '../../common';
import { CourseCard } from './components';

import styles from './styles.module.css';
import { EmptyCourseList } from './components/EmptyCourseList';
import { useNavigate } from 'react-router-dom';

export const Courses = ({ coursesList, authorsList }) => {
	const navigate = useNavigate();

	const navigateToAddCoursePage = () => {
		navigate('add', { replace: true });
	};

	const navigateToCourseInfoPage = (id) => {
		navigate(id, { replace: true });
	};

	return coursesList.length ? (
		<div>
			<div className={styles.courses_button_wrapper}>
				<Button
					buttonText='Add new'
					data-testid='addCourse'
					handleClick={navigateToAddCoursePage}
				/>
			</div>
			{coursesList.map((course) => (
				<CourseCard
					authorsList={authorsList}
					course={course}
					key={course.id}
					handleShowCourse={navigateToCourseInfoPage}
				/>
			))}
		</div>
	) : (
		<EmptyCourseList />
	);
};
