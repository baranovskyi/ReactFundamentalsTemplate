import { Header } from '../Header';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../helpers/test-utils';
import { initialState } from '../../../constants';

describe('Header Component', () => {
	beforeEach(() => {
		window.localStorage.setItem('token', 'token');
	});

	it('should have logo', () => {
		const { getByTestId } = renderWithProviders(<Header />, {
			preloadedState: initialState,
		});

		expect(getByTestId('logo')).toBeInTheDocument();
	});

	it('should have user name', () => {
		const { getByText } = renderWithProviders(<Header />, {
			preloadedState: initialState,
		});

		expect(getByText('Alex')).toBeInTheDocument();
	});
});
