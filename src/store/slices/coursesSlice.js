import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		// setCourses:
		// saveCourse:
		// deleteCourse:
		// updateCourse:
	},
});

// use these actions in your components / thunks
export const { setCourses, saveCourse, deleteCourse, updateCourse } =
	coursesSlice.actions;

export default coursesSlice.reducer;
