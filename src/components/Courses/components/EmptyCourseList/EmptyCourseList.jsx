import React from 'react';
import styles from './styles.module.css';
import { Button } from '../../../../common';

export const EmptyCourseList = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Your list is empty</h1>
				<p>Please use 'Add New Course' button to add your first course</p>
				<div className={styles.empty_list_button_wrapper}>
					<Button buttonText='Add new course' data-testid='addCourse' />
				</div>
			</div>
		</>
	);
};
