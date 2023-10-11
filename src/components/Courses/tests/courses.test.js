import { renderWithProviders } from '../../../helpers/test-utils';
import { Courses } from '../Courses';
import {
	initialState,
	mockedAuthorsList,
	mockedCoursesList,
} from '../../../constants';

describe('Courses Component', () => {
	let renderedComponent;

	beforeEach(() => {
		renderedComponent = renderWithProviders(<Courses />, {
			preloadedState: {
				...initialState,
				authors: mockedAuthorsList,
				courses: mockedCoursesList,
			},
		});
	});

	it('should display amount of CourseCard equal length of courses array', () => {
		const { queryAllByTestId } = renderedComponent;

		expect(queryAllByTestId('courseCard')).toHaveLength(
			mockedCoursesList.length
		);
	});
});
