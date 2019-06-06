import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import LoginPage from '../Pages/Login';
import SignUpPage from '../Pages/SignUp';
import Geolocation from '../../Geolocation';
import MyDogs from '../Pages/MyDogs';
import DogsControll from '../Pages/MyDogs/Dogs';

import UserRoute from './UserRoute';
import GuestRoute from './GuestRoute';

const RouteNav = () => {
	return (
		<>
			<Switch>
				<GuestRoute
					path='/login'
					exact
					component={LoginPage}
					redirect='/dogs'
				/>
				<GuestRoute
					path='/sign-up'
					exact
					component={SignUpPage}
					redirect='/my-dogs'
				/>
				<UserRoute path='/my-dogs' exact component={MyDogs} />
				<UserRoute path='/my-dogs/new' exact component={DogsControll} />
				<UserRoute path='/dogs' exact component={Geolocation} />
				<Redirect from='/' to='/my-dogs' />
			</Switch>
		</>
	);
};

export default RouteNav;
