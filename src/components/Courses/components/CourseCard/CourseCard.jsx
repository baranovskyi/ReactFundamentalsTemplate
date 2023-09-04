import React from 'react';

import { formatCreationDate, getCourseDuration } from '../../../../helpers';

export const CourseCard = ({ course, handleShowCourse }) => {
	// write your code here

	return (
		<div className={styles.cardContainer} data-testid='courseCard'>
			<div className={styles.cardText}>
				<h2>Title</h2>
				<p>Description</p>
			</div>
			<div className={styles.cardDetails}>
				<p>
					<b>Authors: </b>
					authors list
				</p>
				<p>
					<b>Duration:</b>
					<span>duration</span>
				</p>
				<p>
					<b>Created: </b>
					<span>date</span>
				</p>
				<div>
					// reuse Button component for 'Show course' button // reuse Button
					component for 'Delete' button with data-testid="deleteCourse" // reuse
					Button component for 'Update' button with data-testid="updateCourse"
				</div>
			</div>
		</div>
	);
};
