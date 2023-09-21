import React, { useState } from 'react';

import styles from './styles.module.css';
import { Button, Input } from '../../common';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services';

export const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		const payload = {
			password,
			email,
		};

		await login(payload).then((res) => {
			localStorage.setItem('token', res.result);
			localStorage.setItem('userName', res.user.name);
			navigate('courses');
		});
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
				</div>
				<div className={styles.form_control}>
					<Input
						placeholderText='Input text'
						labelText='Password'
						onChange={(event) => setPassword(event.target.value)}
					/>
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
