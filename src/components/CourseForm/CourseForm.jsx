import React from 'react';

import styles from './styles.module.css';
import { Button, Input } from '../../common';
import { AuthorItem, CreateAuthor } from './components';

export const CourseForm = ({ authorsList, createCourse, createAuthor }) => {
	const handleSubmit = async () => {};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Input
					labelText='Title'
					placeholderText='Input text'
					data-testid='titleInput'
				/>
			</div>

			<label>
				Description
				<textarea data-testid='descriptionTextArea' />
			</label>

			<div className={styles.infoWrapper}>
				<div>
					<p>Duration: </p>
					<Input
						labelText='Duration'
						placeholderText='Input text'
						data-testid='durationInput'
					/>
					<CreateAuthor />
				</div>

				<div className={styles.authorsContainer}>
					<strong>Authors</strong>
					{authorsList.map((author) => (
						<AuthorItem authorName={author.name} key={author.id} />
					))}
					<strong>Course authors</strong>
					// use 'map' to display course's autors
					{/* <p data-testid="selectedAuthor"}>{author.name}</p> */}
					<p className={styles.notification}>List is empty</p> // display this
					paragraph if there are no authors in the course
				</div>
			</div>
			<Button buttonText='Save course' data-testid='createCourseButton' />
		</form>
	);
};
