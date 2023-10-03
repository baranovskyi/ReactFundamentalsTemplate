import { getCurrentUser } from '../../services';
import { removeUserData, setUserData } from '../slices/userSlice';

export const getUserThunk = () => {
	return async (dispatch) => {
		const response = await getCurrentUser();

		dispatch(setUserData(response.result));
	};
};

export const logoutThunk = () => {
	return async (dispatch) => {
		localStorage.removeItem('token');
		dispatch(removeUserData());
	};
};
