import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Query, ApolloConsumer } from 'react-apollo';

import { GET_ME } from '../../utils/QueriesGQL';

import gql from 'graphql-tag';

const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`;

const GuestRoute = ({ component: Component, ...rest }) => (
	<ApolloConsumer>
		{client => (
			<Query query={IS_LOGGED_IN}>
				{({ data }) => (
					<Route
						{...rest}
						render={props =>
							!data.isLoggedIn ? (
								<Component {...props} />
							) : (
								<Redirect to={rest.redirect} />
							)
						}
					/>
				)}
			</Query>
		)}
	</ApolloConsumer>
);

export default GuestRoute;
