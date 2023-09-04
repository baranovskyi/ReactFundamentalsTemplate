import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		// setAuthors:
		// saveAuthor:
	},
});

// use these actions in your components / thunks
export const { setAuthors, saveAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
