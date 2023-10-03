import React from 'react';

import { Button } from '../../../../common';
import { formatCreationDate, getCourseDuration } from '../../../../helpers';
import { deleteCourse } from '../../../../services';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthorsList } from '../../../../store/selectors';
import store from '../../../../store';

export const CourseCard = ({ course }) => {
	const authorsList = useSelector(getAuthorsList);
	const isAdmin = useSelector((state) => state.user.role === 'admin');
	const authorsNames = course.authors
		.map((id) => authorsList.find((author) => author.id === id))
		.filter((author) => author)
		.map((author) => author.name);

	const handleDeleteCourse = (event) => {
		event.preventDefault();

		store.dispatch(deleteCourse(course.id));
	};

	return (
		<div className={styles.cardContainer} data-testid='courseCard'>
			<div className={styles.cardText}>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className={styles.cardDetails}>
				<p>
					<b>Authors: </b>
					{authorsNames.join(', ')}
				</p>
				<p>
					<b>Duration: </b>
					<span>{getCourseDuration(course.duration)}</span>
				</p>
				<p>
					<b>Created: </b>
					<span>{formatCreationDate(course.creationDate)}</span>
				</p>
				<div className={styles.buttonGroup}>
					<Link to={`/courses/${course.id}`}>
						<Button buttonText='Show course' />
					</Link>
					{isAdmin && (
						<Button
							buttonText='Delete'
							data-testid='deleteCourse'
							handleClick={handleDeleteCourse}
						/>
					)}
					<Button buttonText='Update' data-testid='updateCourse' />
				</div>
			</div>
		</div>
	);
};
