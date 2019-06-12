import React from 'react';
import { NavLink } from 'react-router-dom';
import { Query, ApolloConsumer } from 'react-apollo';

import { GET_ME } from '../../utils/QueriesGQL';
import logout from '../Logout/Logout';

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
			</li>
		</ul>
	);
};

export default Links;
