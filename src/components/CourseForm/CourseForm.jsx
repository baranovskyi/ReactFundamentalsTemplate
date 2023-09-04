import React from 'react';

import styles from './styles.module.css';

export const CourseForm = ({ authorsList, createCourse, createAuthor }) => {
	//write your code here

	return (
		<form onSubmit={handleSubmit}>
			<div>
				// reuse Input component for title field with data-testid="titleInput"
				// reuse Button component for 'Save course' button with
				data-testid="createCourseButton"
			</div>

			<label>
				Description
				<textarea data-testid='descriptionTextArea' />
			</label>

			<div className={styles.infoWrapper}>
				<div>
					// use CreateAuthor component // reuse Input component with
					data-testid='durationInput' for duration field
					<p>Duration: </p>
				</div>

				<div className={styles.authorsContainer}>
					<strong>Authors</strong>
					// use 'map' to display all available autors. Reuse 'AuthorItem'
					component for each author
					<strong>Course authors</strong>
					// use 'map' to display course's autors
					{/* <p data-testid="selectedAuthor"}>{author.name}</p> */}
					<p className={styles.notification}>List is empty</p> // display this
					paragraph if there are no authors in the course
				</div>
			</div>
		</form>
	);
};
