import React, { useState } from 'react';

import styles from './styles.module.css';
import { Button, Input } from '../../common';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../services';

export const Registration = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		const payload = {
			name,
			password,
			email,
		};

		await createUser(payload).then(() => {
			navigate('login', { replace: true });
		});
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<h1>Registration</h1>
				<Input
					placeholderText='Input text'
					labelText='Name'
					onChange={(event) => setName(event.target.value)}
				/>
				<Input
					placeholderText='Input text'
					labelText='Email'
					onChange={(event) => setEmail(event.target.value)}
				/>
				<Input
					placeholderText='Input text'
					labelText='Password'
					onChange={(event) => setPassword(event.target.value)}
				/>
				<Button buttonText='Login' data-testid='register_button' />
			</form>
			<p>
				If you have an account you can&nbsp;
				<Link to='/login'>Login</Link>
			</p>
		</div>
	);
};
