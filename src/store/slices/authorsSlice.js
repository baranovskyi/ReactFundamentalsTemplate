import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		setAuthors: (state, { payload }) => {
			return [...state, ...payload];
		},
		// saveAuthor:
	},
});

// use these actions in your components / thunks
export const { setAuthors, saveAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
