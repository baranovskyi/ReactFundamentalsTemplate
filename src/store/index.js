import { configureStore } from '@reduxjs/toolkit';

import authorsSlice from './slices/authorsSlice';
import coursesSlice from './slices/coursesSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
	reducer: {
		user: userSlice,
		courses: coursesSlice,
		authors: authorsSlice,
	},
});

export default store;
