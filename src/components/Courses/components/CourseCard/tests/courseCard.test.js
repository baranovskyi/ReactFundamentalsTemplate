import { renderWithProviders } from '../../../../../helpers/test-utils';
import { CourseCard } from '../CourseCard';
import { initialState, mockedAuthorsList } from '../../../../../constants';

const mockedCourse = {
	id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
	title: 'JavaScript',
	description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
	creationDate: '08/03/2021',
	duration: 160,
	authors: [
		'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		'f762978b-61eb-4096-812b-ebde22838167',
	],
};

describe('CourseCard Component', () => {
	let renderedComponent;

	beforeEach(() => {
		renderedComponent = renderWithProviders(
			<CourseCard course={mockedCourse} />,
			{
				preloadedState: {
					...initialState,
					authors: mockedAuthorsList,
				},
			}
		);
	});

	it('should display title', () => {
		const { getByText } = renderedComponent;

		expect(getByText('JavaScript')).toBeInTheDocument();
	});

	it('should display description', () => {
		const { getByTestId } = renderedComponent;

		expect(getByTestId('course_description')).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		const { getByTestId } = renderedComponent;

		expect(getByTestId('course_duration')).toHaveTextContent('02:40 hours');
	});

	it('should display authors list', () => {
		const { getByTestId, debug } = renderedComponent;
		debug();
		expect(getByTestId('course_authors')).toBeInTheDocument();
	});

	it('should display created date in the correct format', () => {
		const { getByTestId } = renderedComponent;

		expect(getByTestId('course_created_date')).toHaveTextContent('08.03.2021');
	});
});
