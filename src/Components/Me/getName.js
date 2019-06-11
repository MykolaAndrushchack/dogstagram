import React from 'react';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { Loader } from '../Loader/Loader';

const GET_ME = gql`
	query Me {
		me {
			username
		}
	}
`;

const getName = () => (
	<>
		<Query query={GET_ME}>
			{({ loading, error, data }) => {
				if (loading) return null;
				if (error) return `Error! ${error.message}`;

				return !!data.me.username;
			}}
		</Query>
	</>
);

export default getName;
