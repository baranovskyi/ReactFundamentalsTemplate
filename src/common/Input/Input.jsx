import React from 'react';

import styles from './styles.module.css';

export const Input = ({
	placeholderText,
	labelText,
	onChange,
	'data-testid': dataTestId,
}) => (
	<label>
		{labelText}
		<input
			onChange={onChange}
			placeholder={placeholderText}
			data-testid={dataTestId}
		/>
	</label>
);
