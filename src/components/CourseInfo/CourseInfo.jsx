import React from 'react';

import { formatCreationDate, getCourseDuration } from '../../helpers';

import styles from './styles.module.css';

export const CourseInfo = ({
	coursesList,
	authorsList,
	onBack,
	showCourseId,
}) => {
	// write your code here

	return (
		<div data-testid='courseInfo'>
			// Module 1: reuse Button component for 'onBack' functionality // Module
			2: use 'react-router-dom' 'Link' component for button 'Back'
			<h1>Course title</h1>
			<div className={styles.courseInfo}>
				<p className={styles.description}>{description}</p>
				<div>
					<p>
						<b>ID: </b>
						id
					</p>
					<p>
						<b>Duration: </b>
						duration
					</p>
					<p>
						<b>Created: </b>
						creation date
					</p>
					<div>
						<b>Authors</b>
						<ul className={styles.authorsList}>
							//use '.map' to render authors list with 'li' tag
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
