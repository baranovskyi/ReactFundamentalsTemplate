import React from 'react';

import { Button } from '../../../../common';
import { formatCreationDate, getCourseDuration } from '../../../../helpers';

import styles from './styles.module.css';

export const CourseCard = ({ course, handleShowCourse, authorsList }) => {
	const authorsNames = course.authors.map((id) => {
		const author = authorsList.find((author) => author.id === id);

		return author.name;
	});

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
					<Button buttonText='Show course' />
					<Button buttonText='Delete' data-testid='deleteCourse' />
					<Button buttonText='Update' data-testid='updateCourse' />
				</div>
			</div>
		</div>
	);
};
