import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	createCourseThunk,
	deleteCourseThunk,
	getCoursesThunk,
	updateCourseThunk,
} from '../coursesThunk';

import {
	createCourse,
	getCourses,
	updateCourseRequest,
} from '../../../services';
import {
	deleteCourse,
	saveCourse,
	setCourses,
	updateCourse,
} from '../../slices/coursesSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../../services', () => ({
	updateCourseRequest: jest.fn(),
	deleteCourseRequest: jest.fn(),
	createCourse: jest.fn(),
	getCourses: jest.fn(),
}));

const fakeCourses = [
	{ id: 1, name: 'Course 1' },
	{ id: 2, name: 'Course 2' },
];

const fakeCourseId = 1;

describe('Courses thunks', () => {
	let store;

	beforeEach(() => {
		store = mockStore({});
	});

	it('updateCourseThunk should dispatch updateCourse action with the response', async () => {
		updateCourseRequest.mockResolvedValue({ result: fakeCourses[0] });
		await store.dispatch(updateCourseThunk(fakeCourses[0], fakeCourseId));
		const actions = store.getActions();

		expect(actions).toEqual([updateCourse(fakeCourses[0])]);
	});

	it('deleteCourseThunk should dispatch deleteCourse action with the courseId', async () => {
		await store.dispatch(deleteCourseThunk(fakeCourseId));
		const actions = store.getActions();

		expect(actions).toEqual([deleteCourse(fakeCourseId)]);
	});

	it('createCourseThunk should dispatch saveCourse action with the response', async () => {
		createCourse.mockResolvedValue({ result: fakeCourses[0] });
		await store.dispatch(createCourseThunk(fakeCourses[0]));
		const actions = store.getActions();

		expect(actions).toEqual([saveCourse(fakeCourses[0])]);
	});

	it('getCoursesThunk should dispatch setCourses action with the response', async () => {
		getCourses.mockResolvedValue({ result: fakeCourses });
		await store.dispatch(getCoursesThunk());
		const actions = store.getActions();

		expect(actions).toEqual([setCourses(fakeCourses)]);
	});
});
