import {
	deleteCourse,
	saveCourse,
	setCourses,
	updateCourse,
} from '../slices/coursesSlice';
import {
	createCourse,
	deleteCourseRequest,
	getCourses,
	updateCourseRequest,
} from '../../services';

export const updateCourseThunk = (course, courseId) => {
	return async (dispatch) => {
		const response = await updateCourseRequest(course, courseId);

		dispatch(updateCourse(response.result));
	};
};

export const deleteCourseThunk = (courseId) => {
	return async (dispatch) => {
		await deleteCourseRequest(courseId);

		dispatch(deleteCourse(courseId));
	};
};

export const createCourseThunk = (course) => {
	return async (dispatch) => {
		const response = await createCourse(course);

		dispatch(saveCourse(response.result));
	};
};

export const getCoursesThunk = () => {
	return async (dispatch) => {
		const response = await getCourses();

		dispatch(setCourses(response.result));
	};
};
