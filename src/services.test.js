import {
	createAuthor,
	createCourse,
	createUser,
	getAuthors,
	getCourses,
	getCurrentUser,
	getParams,
	login,
	postParams,
	updateCourseRequest,
} from './services';
import { act } from 'react-dom/test-utils';

const userData = { username: 'testUser', password: 'password123' };
const mockedFetch = (response) => {
	return jest.fn().mockResolvedValue({
		json: async () => response,
		status: 200,
	});
};

describe('services', () => {
	it('getParams should return the correct object', () => {
		const params = { param1: 'param1' };
		const headers = { header1: 'header1' };
		const result = getParams(params, headers);

		expect(result).toEqual({
			...params,
			method: 'GET',
			headers: { 'Content-Type': 'application/json', ...headers },
		});
	});

	it('postParams should return the correct object', () => {
		const params = { param1: 'param1' };
		const result = postParams(params);

		expect(result).toEqual({
			...params,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		});
	});

	it('should login a user and return the response', async () => {
		const mockedResponse = { user: 'Test', email: 'test@gmail.com' };
		global.fetch = mockedFetch(mockedResponse);

		let response;
		await act(async () => {
			response = await login(userData);
		});

		expect(response).toEqual(mockedResponse);
	});

	it('should create a user and return the response', async () => {
		const mockedResponse = {
			userId: 123,
			message: 'User created successfully',
		};
		global.fetch = mockedFetch(mockedResponse);

		let response;
		await act(async () => {
			response = await createUser(userData);
		});

		expect(response).toEqual(mockedResponse);
	});

	it('should return the courses list', async () => {
		const mockedResponse = {
			result: [
				{ id: 1, name: 'Course 1' },
				{ id: 2, name: 'Course 2' },
			],
		};
		global.fetch = mockedFetch(mockedResponse);

		let response;
		await act(async () => {
			response = await getCourses();
		});

		expect(response).toEqual(mockedResponse);
	});

	it('should return the authors list', async () => {
		const mockedResponse = {
			result: [
				{ id: 1, name: 'Author 1' },
				{ id: 2, name: 'Author 2' },
			],
		};
		global.fetch = mockedFetch(mockedResponse);

		let response;
		await act(async () => {
			response = await getAuthors();
		});

		expect(response).toEqual(mockedResponse);
	});

	it('should return the current user', async () => {
		const mockedResponse = {
			result: { id: 1, name: 'Test', email: 'test@gmail.com' },
		};
		global.fetch = mockedFetch(mockedResponse);

		let response;
		await act(async () => {
			response = await getCurrentUser();
		});

		expect(response).toEqual(mockedResponse);
	});

	it('should update the course', async () => {
		const mockedResponse = {
			result: { id: 1, name: 'Course 1 updated' },
		};
		global.fetch = mockedFetch(mockedResponse);

		let response;
		await act(async () => {
			response = await updateCourseRequest();
		});

		expect(response).toEqual(mockedResponse);
	});

	it('createCourse should return the response', async () => {
		const mockedResponse = {
			result: { id: 1, name: 'Course 1' },
		};
		global.fetch = mockedFetch(mockedResponse);

		let response;
		await act(async () => {
			response = await createCourse();
		});

		expect(response).toEqual(mockedResponse);
	});

	it('createAuthor should return the response', async () => {
		const mockedResponse = {
			result: { id: 1, name: 'Author 1' },
		};
		global.fetch = mockedFetch(mockedResponse);

		let response;
		await act(async () => {
			response = await createAuthor();
		});

		expect(response).toEqual(mockedResponse);
	});
});
