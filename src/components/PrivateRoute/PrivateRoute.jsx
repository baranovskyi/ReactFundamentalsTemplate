import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
	const isAdmin = useSelector((state) => state.user.role === 'admin');

	return isAdmin ? children : <Navigate to={'/login'} />;
};
