import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

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
