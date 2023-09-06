import React from 'react';

import { Button } from '../../common';
import { formatCreationDate, getCourseDuration } from '../../helpers';

import styles from './styles.module.css';

export const CourseInfo = ({ course, authorsList, onBack, showCourseId }) => {
	const authorsNames = course.authors.map((id) => {
		const author = authorsList.find((author) => author.id === id);

		return author.name;
	});

	return (
		<div data-testid='courseInfo'>
			{/* Module 2: use 'react-router-dom' 'Link' component for button 'Back' */}
			<h1>{course.title}</h1>
			<div className={styles.courseInfo}>
				<p className={styles.description}>
					<b className={styles.title}>Description</b>
					<p>{course.description}</p>
				</p>
				<div>
					<p>
						<b>ID: </b>
						{course.id}
					</p>
					<p className={styles.description}>
						<b>Duration: </b>
						{getCourseDuration(course.duration)}
					</p>
					<p>
						<b>Created: </b>
						{formatCreationDate(course.creationDate)}
					</p>
					<div className={styles.authorsList}>
						<b>Authors</b>
						<ul className={styles.authorsList}>
							{authorsNames.map((author) => (
								<li>{author}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<Button
				className={styles.button}
				buttonText='Back'
				handleClick={onBack}
			/>
		</div>
	);
};
