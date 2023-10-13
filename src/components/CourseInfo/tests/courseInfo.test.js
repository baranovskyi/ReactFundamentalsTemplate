import { renderWithProviders } from '../../../helpers/test-utils';
import {
	initialState,
	mockedAuthorsList,
	mockedCoursesList,
} from '../../../constants';
import { CourseInfo } from '../CourseInfo';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		courseId: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
	}),
}));
describe('CourseInfo Component', () => {
	let renderedComponent;

	beforeEach(() => {
		renderedComponent = renderWithProviders(<CourseInfo />, {
			preloadedState: {
				...initialState,
				authors: mockedAuthorsList,
				courses: mockedCoursesList,
			},
		});
	});

	it('should display title', () => {
		const { getByText } = renderedComponent;

		expect(getByText('Angular')).toBeInTheDocument();
	});

	it('should display description', () => {
		const { getByTestId } = renderedComponent;

		expect(getByTestId('course_info_description')).toBeInTheDocument();
	});

	it('should display course id', () => {
		const { getByText } = renderedComponent;

		expect(
			getByText('b5630fdd-7bf7-4d39-b75a-2b5906fd0916')
		).toBeInTheDocument();
	});

	it('should display authors list', () => {
		const { getByTestId } = renderedComponent;

		expect(getByTestId('course_info_authors')).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		const { getByTestId } = renderedComponent;

		expect(getByTestId('course_info_duration')).toHaveTextContent(
			'03:30 hours'
		);
	});
});
