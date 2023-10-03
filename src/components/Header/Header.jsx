import React from 'react';

import { Button } from '../../common';
import { Logo } from './components';

import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../store/selectors';
import store from '../../store';
import { logout } from '../../services';

export const Header = () => {
	const userInfo = useSelector(getUserInfo);
	const navigate = useNavigate();
	const isUserLoggedIn = localStorage.getItem('token');

	const logOut = () => {
		localStorage.removeItem('token');
		navigate('/');
		store.dispatch(logout());
	};

	return (
		<div className={styles.headerContainer}>
			<Logo />
			<div className={styles.userContainer}>
				{isUserLoggedIn && (
					<>
						<p className={styles.userName}>{userInfo.name}</p>
						<Button buttonText='Logout' handleClick={logOut} />
					</>
				)}
			</div>
		</div>
	);
};
