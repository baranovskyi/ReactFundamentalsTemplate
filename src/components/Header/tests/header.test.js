import { Header } from '../Header';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../helpers/test-utils';

describe('Header Component', () => {
	beforeEach(() => {
		window.localStorage.setItem('token', 'token');
	});

	it('should have logo', () => {
		const { getByTestId } = renderWithProviders(<Header />);

		expect(getByTestId('logo')).toBeInTheDocument();
	});

	it('should have user name', () => {
		const { getByText } = renderWithProviders(<Header />);

		expect(getByText('Alex')).toBeInTheDocument();
	});
});
