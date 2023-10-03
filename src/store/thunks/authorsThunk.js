import { createAuthor, getAuthors } from '../../services';
import { saveAuthor, setAuthors } from '../slices/authorsSlice';

export const createAuthorThunk = (name) => {
	return async (dispatch) => {
		const response = await createAuthor(name);

		dispatch(saveAuthor(response.result));
	};
};

export const getAuthorsThunk = () => {
	return async (dispatch) => {
		const response = await getAuthors();

		dispatch(setAuthors(response.result));
	};
};
