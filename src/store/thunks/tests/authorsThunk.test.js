import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createAuthorThunk, getAuthorsThunk } from '../authorsThunk';
import { createAuthor, getAuthors } from '../../../services';
import { saveAuthor, setAuthors } from '../../slices/authorsSlice';

// Mock your service functions
jest.mock('../../../services', () => ({
	createAuthor: jest.fn(),
	getAuthors: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Authors thunks', () => {
	let store;

	beforeEach(() => {
		store = mockStore({});
	});

	it('should dispatch saveAuthor with the response', async () => {
		const response = { result: { id: 1, name: 'John Doe' } };
		createAuthor.mockResolvedValue(response);
		await store.dispatch(createAuthorThunk('John Doe'));
		const actions = store.getActions();

		expect(actions).toEqual([saveAuthor(response.result)]);
	});

	it('should dispatch setAuthors with the response', async () => {
		const response = {
			result: [
				{ id: 1, name: 'Author 1' },
				{ id: 2, name: 'Author 2' },
			],
		};
		getAuthors.mockResolvedValue(response);
		await store.dispatch(getAuthorsThunk());
		const actions = store.getActions();

		expect(actions).toEqual([setAuthors(response.result)]);
	});
});
