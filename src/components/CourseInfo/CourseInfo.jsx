import React from 'react';

import { Button } from '../../common';
import { formatCreationDate, getCourseDuration } from '../../helpers';

import styles from './styles.module.css';
import { Link, useParams } from 'react-router-dom';
import { getAuthorsList, getCoursesList } from '../../store/selectors';
import { useSelector } from 'react-redux';

export const CourseInfo = () => {
	const { courseId } = useParams();
	const coursesList = useSelector(getCoursesList);
	const authorsList = useSelector(getAuthorsList);
	const course = coursesList.find(({ id }) => id === courseId);
	const authors = course.authors.map((id) => {
		return authorsList.find((author) => author.id === id);
	});

	return (
		<div data-testid='courseInfo'>
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
							{authors.map((author) => (
								<li key={author.id}>{author.name}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.button_wrapper}>
				<Link to='/courses'>
					<Button buttonText='Back' />
				</Link>
			</div>
		</div>
	);
};
