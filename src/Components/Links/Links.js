import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Logout/LogoutButton';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { GET_ME } from '../../utils/QueriesGQL';
import logout from '../Logout/Logout';

const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`;

const Links = props => {
	return (
		<ul className='toolbar_navigation_list'>
			<li>
				<NavLink to='/my-dogs' onClick={props.onClick}>
					My dogs
				</NavLink>
			</li>
			<li>
				<NavLink to='/dogs' onClick={props.onClick}>
					Dogs
				</NavLink>
			</li>
			<li>
				{
					<ApolloConsumer>
						{client => (
							<Query query={GET_ME} fetchPolicy='network-only'>
								{({ loading, error, data }) => {
									if (loading) return null;
									if (error) return `Error! ${error.message}`;
									if (!data || !data.me) return logout();

									return <h1>{data.me.username}</h1>;
								}}
							</Query>
						)}
					</ApolloConsumer>
				}
				{/* <ApolloConsumer>
					{client => (
						<Query query={IS_LOGGED_IN}>
							{({ data }) =>
								data.isLoggedIn ? (
									<LogoutButton />
								) : (
									<NavLink to='/login'>Login</NavLink>
								)
							}
						</Query>
					)}
				</ApolloConsumer> */}
			</li>
		</ul>
	);
};

export default Links;
