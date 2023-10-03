import { setCourses } from '../slices/coursesSlice';
import { getCourses } from '../../services';

export const updateCourseThunk = () => {};

export const deleteCourseThunk = () => {};

export const createCourseThunk = () => {};

export const getCoursesThunk = () => {
	return async (dispatch) => {
		const response = await getCourses();

		dispatch(setCourses(response));
	};
};
