import React from 'react';

import { Button } from '../../common';
import { Logo } from './components';

import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();
	const isUserLoggedIn = localStorage.getItem('token');
	const userName = localStorage.getItem('userName');

	const logOut = () => {
		localStorage.removeItem('token');
		navigate('/');
		window.location.reload();
	};

	return (
		<div className={styles.headerContainer}>
			<Logo />
			<div className={styles.userContainer}>
				{isUserLoggedIn && (
					<>
						<p className={styles.userName}>{userName}</p>
						<Button buttonText='Logout' handleClick={logOut} />
					</>
				)}
			</div>
		</div>
	);
};
