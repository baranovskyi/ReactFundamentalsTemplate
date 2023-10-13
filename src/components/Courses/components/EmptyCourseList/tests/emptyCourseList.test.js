import { renderWithProviders } from '../../../../../helpers/test-utils';
import { initialState } from '../../../../../constants';
import { EmptyCourseList } from '../EmptyCourseList';

describe('EmptyCourseList Component', () => {
	it('should display message about no permissions', () => {
		const { getByText } = renderWithProviders(<EmptyCourseList />, {
			preloadedState: {
				...initialState,
				user: {
					role: 'cp',
				},
			},
		});

		expect(
			getByText(
				"You don't have permissions to create a course. Please log in as ADMIN"
			)
		).toBeInTheDocument();
	});

	it('should display empty course list message', () => {
		const { getByText } = renderWithProviders(<EmptyCourseList />, {
			preloadedState: {
				...initialState,
			},
		});

		expect(getByText('Your list is empty')).toBeInTheDocument();
	});
});
