import { setCourses } from '../slices/coursesSlice';
import {
	createCourse,
	deleteCourse,
	getCourses,
	updateCourse,
} from '../../services';

export const updateCourseThunk = (course, courseId) => {
	return async (dispatch) => {
		const response = await updateCourse(course, courseId);

		dispatch(setCourses(response.result));
	};
};

export const deleteCourseThunk = (courseId) => {
	return async (dispatch) => {
		const response = await deleteCourse(courseId);

		dispatch(setCourses(response.result));
	};
};

export const createCourseThunk = (course) => {
	return async (dispatch) => {
		const response = await createCourse(course);

		dispatch(setCourses(response.result));
	};
};

export const getCoursesThunk = () => {
	return async (dispatch) => {
		const response = await getCourses();

		dispatch(setCourses(response.result));
	};
};
