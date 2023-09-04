import React from 'react';

import styles from './styles.module.css';

export const AuthorItem = () => (
	<div className={styles.authorItem} data-testid='authorItem'>
		<span>Boris Smith</span>
		// reuse Button component for 'Add author' button with
		data-testid="addAuthor" attribute
	</div>
);
