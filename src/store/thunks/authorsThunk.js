import { createAuthor, getAuthors } from '../../services';
import { setAuthors } from '../slices/authorsSlice';

export const createAuthorThunk = (name) => {
	return async (dispatch) => {
		const response = await createAuthor(name);

		dispatch(setAuthors(response.result));
	};
};

export const getAuthorsThunk = () => {
	return async (dispatch) => {
		const response = await getAuthors();

		dispatch(setAuthors(response.result));
	};
};
