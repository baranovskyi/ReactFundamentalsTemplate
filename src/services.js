import { setCourses } from './store/slices/coursesSlice';
import { setAuthors } from './store/slices/authorsSlice';
import { removeUserData, setUserData } from './store/slices/userSlice';

const apiUrl = 'http://localhost:4000';
const token = localStorage.getItem('token');

const getParams = (params, headers) => {
	return {
		...params,
		method: 'GET',
		headers: { 'Content-Type': 'application/json', ...headers },
	};
};

const postParams = (params) => {
	return {
		...params,
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	};
};

export const createUser = async (data) => {
	const response = await fetch(
		`${apiUrl}/register`,
		postParams({ body: JSON.stringify(data) })
	);

	return await response.json();
};

export const login = async (data) => {
	const response = await fetch(
		`${apiUrl}/login`,
		postParams({ body: JSON.stringify(data) })
	);

	return await response.json();
};

export const getCourses = () => {
	return async (dispatch) => {
		const response = await fetch(`${apiUrl}/courses/all`, getParams());
		const { result } = await response.json();

		dispatch(setCourses(result));
	};
};

export const getAuthors = () => {
	return async (dispatch) => {
		const response = await fetch(`${apiUrl}/authors/all`, getParams());
		const { result } = await response.json();

		dispatch(setAuthors(result));
	};
};

export const getCurrentUser = () => {
	return async (dispatch) => {
		const response = await fetch(
			`${apiUrl}/users/me`,
			getParams({}, { Authorization: token })
		);
		const { result } = await response.json();

		dispatch(setUserData({ ...result, token }));
	};
};

export const updateCourse = async () => {
	// write your code here
};

export const logout = () => {
	return async (dispatch) => {
		await fetch(`${apiUrl}/logout`, {
			method: 'DELETE',
			headers: { Authorization: token },
		});
		dispatch(removeUserData());
	};
};

export const deleteCourse = (courseId) => {
	return async (dispatch) => {
		await fetch(`${apiUrl}/courses/${courseId}`, {
			method: 'DELETE',
			headers: { Authorization: token },
		});

		dispatch(deleteCourse(courseId));
	};
};

export const createCourse = async () => {
	// write your code here
};

export const createAuthor = async () => {
	// write your code here
};
