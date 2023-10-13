import coursesReducer, {
	deleteCourse,
	saveCourse,
	setCourses,
	updateCourse,
} from '../coursesSlice';

describe('coursesSlice', () => {
	it('should set courses correctly', () => {
		const initialState = [];
		const courses = [
			{ id: 1, name: 'Course 1' },
			{ id: 2, name: 'Course 2' },
		];
		const action = setCourses(courses);
		const newState = coursesReducer(initialState, action);

		expect(newState).toEqual(courses);
	});

	it('should delete course correctly', () => {
		const initialState = [
			{ id: 1, name: 'Course 1' },
			{ id: 2, name: 'Course 2' },
		];
		const action = deleteCourse(1);
		const newState = coursesReducer(initialState, action);

		expect(newState).toEqual([{ id: 2, name: 'Course 2' }]);
	});

	it('should save course correctly', () => {
		const initialState = [];
		const course = { id: 1, name: 'Course 1' };
		const action = saveCourse(course);
		const newState = coursesReducer(initialState, action);

		expect(newState).toEqual([course]);
	});

	it('should update course correctly', () => {
		const initialState = [
			{ id: 1, name: 'Course 1' },
			{ id: 2, name: 'Course 2' },
		];
		const course = { id: 1, name: 'Course 1 Updated' };
		const action = updateCourse(course);
		const newState = coursesReducer(initialState, action);

		expect(newState).toEqual([
			{ id: 1, name: 'Course 1 Updated' },
			{ id: 2, name: 'Course 2' },
		]);
	});
});
