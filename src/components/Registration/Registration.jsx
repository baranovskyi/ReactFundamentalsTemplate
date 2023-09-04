import React from 'react';

import styles from './styles.module.css';

export const Registration = () => {
	// write your code here

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1>Registration</h1>
				// reurse Input component for email field // reurse Input component for
				name field // reurse Input component for password field // reurse Button
				component for 'Login' button
			</form>
			<p>
				If you have an account you can&nbsp;
				<a>log in</a>
			</p>
		</div>
	);
};
