import { createSlice } from '@reduxjs/toolkit';

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
				},
			];
		},
		updateCourse: (state, { payload }) => {
			return state.map((course) => {
				if (course.id === payload.id) {
					return {
						...course,
						...payload,
					};
				}

				return course;
			});
		},
	},
});

// use these actions in your components / thunks
export const { setCourses, saveCourse, deleteCourse, updateCourse } =
	coursesSlice.actions;

export default coursesSlice.reducer;
