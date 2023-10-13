import React from 'react';
import styles from './styles.module.css';
import { Button } from '../../../../common';
import { useSelector } from 'react-redux';

export const EmptyCourseList = () => {
	const isAdmin = useSelector((state) => state.user.role === 'admin');

	return (
		<div data-testid='emptyContainer' className={styles.wrapper}>
			{isAdmin ? (
				<>
					<h1 className={styles.title}>Your list is empty</h1>
					<p>Please use 'Add New Course' button to add your first course</p>
					<Button buttonText='Add new course' data-testid='addCourse' />
				</>
			) : (
				<span data-testid='unauthorized_message'>
					You don't have permissions to create a course. Please log in as ADMIN
				</span>
			)}
		</div>
	);
};
