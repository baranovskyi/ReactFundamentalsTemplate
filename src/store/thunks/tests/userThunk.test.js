import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getUserThunk, logoutThunk } from '../userThunk';
import { getCurrentUser } from '../../../services';
import { removeUserData, setUserData } from '../../slices/userSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../../services', () => ({
	getCurrentUser: jest.fn(),
}));

describe('User thunks', () => {
	let store;

	beforeEach(() => {
		store = mockStore({});
	});

	it('should dispatch setUserData with the response from getCurrentUser', async () => {
		const response = { result: { name: 'John Doe' } };
		getCurrentUser.mockResolvedValue(response);
		await store.dispatch(getUserThunk());
		const actions = store.getActions();

		expect(actions).toEqual([setUserData(response.result)]);
	});

	it('should dispatch removeUserData and clear localStorage', async () => {
		const localStorageRemoveItem = jest.spyOn(Storage.prototype, 'removeItem');
		localStorageRemoveItem.mockImplementation(() => {});
		await store.dispatch(logoutThunk());
		const actions = store.getActions();
		expect(actions).toEqual([removeUserData()]);

		expect(localStorageRemoveItem).toHaveBeenCalledWith('token');
	});
});
