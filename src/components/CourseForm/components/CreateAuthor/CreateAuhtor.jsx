import React from 'react';
import { Button, Input } from '../../../../common';
import styles from './styles.module.css';
import store from '../../../../store';
import { createAuthor } from '../../../../services';

export const CreateAuthor = ({ onCreateAuthor }) => {
	const [authorName, setAuthorName] = React.useState('');
	const handleCreateAuthor = (event) => {
		event.preventDefault();
		store.dispatch(createAuthor(authorName));
	};

	return (
		<div>
			<h2>Add author</h2>
			<div className={styles.wrapper}>
				<Input
					labelText='Author name'
					placeholderText='Input text'
					data-testid='createAuthorInput'
					onChange={(e) => setAuthorName(e.target.value)}
				/>
				<Button
					buttonText='Create author'
					data-testid='createAuthorButton'
					handleClick={handleCreateAuthor}
				/>
			</div>
		</div>
	);
};
