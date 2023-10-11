import React from 'react';
import { CourseForm } from '../CourseForm';
import { renderWithProviders } from '../../../helpers/test-utils';
import {
	initialState,
	mockedAuthorsList,
	mockedCoursesList,
} from '../../../constants';

jest.mock('../../../store/thunks/coursesThunk', () => ({
	createCourseThunk: jest.fn(),
}));

describe('CourseForm', () => {
	let renderedComponent;

	beforeEach(() => {
		renderedComponent = renderWithProviders(<CourseForm />, {
			preloadedState: {
				...initialState,
				authors: mockedAuthorsList,
				courses: mockedCoursesList,
			},
		});
	});

	it('should show authors lists (all and course authors)', () => {
		const { getByTestId } = renderedComponent;

		expect(getByTestId('authors_list')).toBeInTheDocument();
	});
});
