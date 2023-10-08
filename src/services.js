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

export const getCourses = async () => {
	const response = await fetch(`${apiUrl}/courses/all`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	return await response.json();
};

export const getAuthors = async () => {
	const response = await fetch(`${apiUrl}/authors/all`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	return await response.json();
};

export const getCurrentUser = async () => {
	const response = await fetch(
		`${apiUrl}/users/me`,
		getParams({}, { Authorization: token })
	);
	return await response.json();
};

export const updateCourseRequest = async (course, courseId) => {
	const response = await fetch(`${apiUrl}/courses/${courseId}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(course),
	});

	return await response.json();
};

export const logout = async () => {
	return await fetch(`${apiUrl}/logout`, {
		method: 'DELETE',
		headers: { Authorization: token },
	});
};

export const deleteCourse = async (courseId) => {
	return await fetch(`${apiUrl}/courses/${courseId}`, {
		method: 'DELETE',
		headers: { Authorization: token },
	});
};

export const createCourse = async (course) => {
	const response = await fetch(`${apiUrl}/courses/add`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(course),
	});

	return await response.json();
};

export const createAuthor = async (name) => {
	const response = await fetch(
		`${apiUrl}/authors/add`,
		postParams({ body: JSON.stringify({ name }) })
	);

	return await response.json();
};
