import React from 'react';

import styles from './styles.module.css';
import { Button } from '../../../../common';

export const AuthorItem = ({ authorName }) => (
	<div className={styles.authorItem} data-testid='authorItem'>
		<span>{authorName}</span>
		<Button buttonText='Add author' data-testid='addAuthor' />
	</div>
);
