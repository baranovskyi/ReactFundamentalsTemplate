import React from 'react';

import { Button } from '../../common';
import { Logo } from './components';

import styles from './styles.module.css';

export const Header = () => {
	// write your cose here

	return (
		<div className={styles.headerContainer}>
			<Logo />
			<div className={styles.userContainer}>
				<p className={styles.userName}>Boris</p>
				<Button buttonText='Logout' />
			</div>
		</div>
	);
};
