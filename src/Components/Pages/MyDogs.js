import React from 'react';
import { Link } from 'react-router-dom';
import CardDog from '../Cart/CardDog';
import Me from '../Me/Me';
import { Query } from 'react-apollo';

import { GET_ME } from '../../utils/QueriesGQL';

class MyDogs extends React.Component {
	render() {
		return (
			<>
				<Link to='/my-dogs/new'>+ADD</Link>
				<Me />
				<Query query={GET_ME} fetchPolicy='network-only'>
					{({ data, loading, error }) => {
						if (error) return `Error ${error}`;
						if (!data || !data.me) return null;
						return (
							<>
								<h2>fetcheded datas</h2>
								{data.me.dogs.map((dog, index) => (
									<p key={index}>{dog.name}</p>
								))}
							</>
						);
					}}
				</Query>
				<CardDog />
			</>
		);
	}
}

export default MyDogs;
