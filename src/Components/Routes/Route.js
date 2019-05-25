import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from '../Pages/Login';
import SignUpPage from '../Pages/SignUp';
import DogsPage from '../Pages/Dogs';

const RouteNav = () => {
	return (
		<>
			<Route path='/login' component={LoginPage} />
			<Route path='/sign-up' component={SignUpPage} />
			<Route path='/my-dogs' component={null} />
			<Route path='/dogs' component={DogsPage} />
		</>
	);
};

export default RouteNav;
