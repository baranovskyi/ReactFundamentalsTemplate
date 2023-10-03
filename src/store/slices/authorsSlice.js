import { createSlice } from '@reduxjs/toolkit';

export function generateRandomUUID() {
	const cryptoObj = window.crypto || window.msCrypto;

	if (!cryptoObj) {
		throw new Error('Your browser does not support the Web Crypto API.');
	}

	const randomBytes = new Uint8Array(16);
	cryptoObj.getRandomValues(randomBytes);
	randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40; // Version 4
	randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80; // Variant
	const hexUUID = Array.from(randomBytes)
		.map((byte) => byte.toString(16).padStart(2, '0'))
		.join('');

	return `${hexUUID.slice(0, 8)}-${hexUUID.slice(8, 12)}-${hexUUID.slice(
		12,
		16
	)}-${hexUUID.slice(16, 20)}-${hexUUID.slice(20)}`;
}

const initialState = [];

export const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		setAuthors: (state, { payload }) => {
			return [...state, ...payload];
		},
		saveAuthor: (state, { payload }) => {
			return [...state, { name: payload, id: generateRandomUUID() }];
		},
	},
});

// use these actions in your components / thunks
export const { setAuthors, saveAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
