import React, { useState } from 'react';

import styles from './styles.module.css';
import { Button, Input } from '../../common';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/slices/userSlice';

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!email.trim().length) {
			setEmailError(true);
		}

		if (!password.trim().length) {
			setPasswordError(true);
		}

		const payload = {
			password,
			email,
		};

		if (email && password) {
			await login(payload).then((res) => {
				dispatch(setUserData({ ...res.user, token: res.result }));
				localStorage.setItem('token', res.result);
				navigate('/courses', { replace: true });
			});
		}
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div className={styles.form_control}>
					<Input
						placeholderText='Input text'
						labelText='Email'
						onChange={(event) => setEmail(event.target.value)}
					/>
					{emailError && (
						<p className={styles.error_message}>Email is required</p>
					)}
				</div>
				<div className={styles.form_control}>
					<Input
						placeholderText='Input text'
						labelText='Password'
						onChange={(event) => setPassword(event.target.value)}
					/>
					{passwordError && (
						<p className={styles.error_message}>Password is required</p>
					)}
				</div>
				<Button buttonText='Login' data-testid='login_button' />
			</form>
			<p>
				If you don't have an account you can&nbsp;
				<Link to='/registration'>Registration</Link>
			</p>
		</div>
	);
};
