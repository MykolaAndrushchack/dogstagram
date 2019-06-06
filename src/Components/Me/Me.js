import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Loader } from '../Loader/Loader';

const GET_ME = gql`
	query Me {
		me {
			username
			dogs {
				name
				sex
				breed
			}
		}
	}
`;

const Me = () => (
	<>
		<Query query={GET_ME} fetchPolicy='network-only'>
			{({ loading, error, data }) => {
				if (loading) return <Loader />;
				if (error) return `Error! ${error.message}`;
				if (!data || !data.me) return null;
				console.log('data-->>', data);
				console.log('dogs', data.me.dogs.map(dog => dog.breed));
				return <h1>{data.me.dogs.map(dog => dog.name)}</h1>;
			}}
		</Query>
	</>
);

export default Me;
