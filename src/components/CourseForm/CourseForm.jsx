import React from 'react';

import styles from './styles.module.css';
import { Button, Input } from '../../common';
import { AuthorItem, CreateAuthor } from './components';
import { getAuthorsList } from '../../store/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import store from '../../store';
import { createCourseThunk } from '../../store/thunks/coursesThunk';

export const CourseForm = () => {
	const navigate = useNavigate();
	const [title, setTitle] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [duration, setDuration] = React.useState('');
	const authorsList = useSelector(getAuthorsList);
	const handleCreateCourse = (event) => {
		event.preventDefault();

		store.dispatch(
			createCourseThunk({ title, description, duration, authors: [] })
		);
		navigate('/courses', { replace: true });
	};

	return (
		<form onSubmit={handleCreateCourse}>
			<div>
				<Input
					labelText='Title'
					placeholderText='Input text'
					data-testid='titleInput'
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>

			<label>
				Description
				<textarea
					data-testid='descriptionTextArea'
					onChange={(e) => setDescription(e.target.value)}
				/>
			</label>

			<div className={styles.infoWrapper}>
				<div>
					<p>Duration: </p>
					<Input
						labelText='Duration'
						placeholderText='Input text'
						data-testid='durationInput'
						onChange={(e) => setDuration(e.target.value)}
					/>
					<CreateAuthor />
				</div>

				<div data-testid='authors_list' className={styles.authorsContainer}>
					<strong>Authors</strong>
					{authorsList.map((author) => (
						<AuthorItem authorName={author.name} key={author.id} />
					))}
					<strong>Course authors</strong>
					{/* use 'map' to display course's autors*/}
					{/* <p data-testid="selectedAuthor"}>{author.name}</p> */}
					<p className={styles.notification}>List is empty</p>{' '}
					{/* display this
					paragraph if there are no authors in the course*/}
				</div>
			</div>
			<Button buttonText='Save course' data-testid='createCourseButton' />
		</form>
	);
};
