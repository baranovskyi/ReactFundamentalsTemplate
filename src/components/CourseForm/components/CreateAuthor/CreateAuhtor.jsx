import React from 'react';
import { Button, Input } from '../../../../common';

export const CreateAuthor = ({ onCreateAuthor }) => {
	// write your code here
	return (
		<div>
			<h2>Add author</h2>
			<Input
				labelText='Author name'
				placeholderText='Input text'
				data-testid='createAuthorInput'
			/>
			<Button buttonText='Create author' data-testid='createAuthorButton' />
		</div>
	);
};
