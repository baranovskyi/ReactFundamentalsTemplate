import authorsReducer, { saveAuthor, setAuthors } from '../authorsSlice';

describe('authorsSlice', () => {
	it('should set authors correctly', () => {
		const initialState = [];
		const authors = [
			{ id: 1, name: 'Author 1' },
			{ id: 2, name: 'Author 2' },
		];
		const action = setAuthors(authors);
		const newState = authorsReducer(initialState, action);

		expect(newState).toEqual(authors);
	});

	it('should save an author correctly', () => {
		const initialState = [{ id: 1, name: 'Author 1' }];
		const newAuthor = { id: 2, name: 'Author 2' };
		const action = saveAuthor(newAuthor);
		const newState = authorsReducer(initialState, action);

		expect(newState).toEqual([...initialState, newAuthor]);
	});
});
