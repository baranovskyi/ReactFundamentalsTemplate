import React from 'react';

import styles from './styles.module.css';

export const Button = ({
	buttonText,
	handleClick,
	'data-testid': dataTestId,
}) => (
	<button
		className={styles.button}
		onClick={handleClick}
		data-testid={dataTestId}
	>
		{buttonText}
	</button>
);
