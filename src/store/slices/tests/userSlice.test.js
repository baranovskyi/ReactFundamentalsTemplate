import userReducer, { removeUserData, setUserData } from '../userSlice';

describe('userSlice', () => {
	it('should set user data correctly', () => {
		const initialState = {};
		const user = {
			isAuth: true,
			name: 'User',
			email: 'test@gmail.com',
			token: localStorage.getItem('token'),
			role: 'admin',
		};
		const action = setUserData(user);
		const newState = userReducer(initialState, action);

		expect(newState).toEqual(user);
	});

	it('should remove user data correctly', () => {
		const initialState = {
			isAuth: false,
			name: '',
			email: '',
			token: localStorage.getItem('token'),
			role: '',
		};

		const action = removeUserData();
		const newState = userReducer(initialState, action);
		expect(newState).toEqual(initialState);
	});
});
