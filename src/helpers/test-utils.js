import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const initialState = {
	user: {
		isAuth: true,
		name: 'Alex',
		email: 'test@gmail.com',
		token: 'token',
		role: 'admin',
	},
};
const mockStore = configureStore();

export function renderWithProviders(
	component,
	{
		preloadedState = {},
		store = mockStore(preloadedState),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return (
			<Provider store={store}>
				<BrowserRouter>{children}</BrowserRouter>
			</Provider>
		);
	}

	return {
		store,
		...render(component, { wrapper: Wrapper, ...renderOptions }),
	};
}
