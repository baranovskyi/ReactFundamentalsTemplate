import { createSlice } from '@reduxjs/toolkit';
import { generateRandomUUID } from './authorsSlice';

const initialState = [];

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		setCourses: (state, { payload }) => {
			return [...state, ...payload];
		},
		deleteCourse: (state, { payload }) => {
			return state.filter((course) => course.id !== payload);
		},
		saveCourse: (state, { payload }) => {
			return [
				...state,
				{
					...payload,
					id: generateRandomUUID(),
					creationDate: new Date().toLocaleDateString('en-US', {
						month: 'numeric',
						day: 'numeric',
						year: 'numeric',
					}),
					authors: [],
				},
			];
		},
		// updateCourse:
	},
});

// use these actions in your components / thunks
export const { setCourses, saveCourse, deleteCourse, updateCourse } =
	coursesSlice.actions;

export default coursesSlice.reducer;
