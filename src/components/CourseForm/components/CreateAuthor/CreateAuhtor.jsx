import React from 'react';
import { Button, Input } from '../../../../common';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { saveAuthor } from '../../../../store/slices/authorsSlice';

export const CreateAuthor = ({ onCreateAuthor }) => {
	const [authorName, setAuthorName] = React.useState('');
	const dispatch = useDispatch();
	const handleCreateAuthor = (event) => {
		event.preventDefault();
		dispatch(saveAuthor(authorName));
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
