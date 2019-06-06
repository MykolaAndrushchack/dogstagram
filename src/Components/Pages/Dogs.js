import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import CartComponent from '../Cart/Cart';
import { Loader } from '../Loader/Loader';
import { Card } from 'semantic-ui-react';

const DOGSNEARBY = gql`
	query dogsNearby($lat: Float!, $lng: Float!) {
		dogsNearby(lat: $lat, lng: $lng) {
			_id
			name
			breed
			dob
			sex
			status
			image
		}
	}
`;

const DogsPage = props => {
	if (props.geolocatoinData.coords === null) return <Loader />;
	return (
		<>
			<h1>Dogs Nearby from your location</h1>
			<Query
				query={DOGSNEARBY}
				variables={{
					lat: props.geolocatoinData.coords.latitude,
					lng: props.geolocatoinData.coords.longitude
				}}
			>
				{({ data, loading, error }) => {
					if (loading) return <Loader />;
					if (error) return `Error! ${error.message}`;
					return (
						<Card.Group>
							{data.dogsNearby.map((dog, index) => (
								<CartComponent
									key={index}
									dogs={dog}
									button='Add to My dogs'
									buttonDelete={false}
								/>
							))}
						</Card.Group>
					);
				}}
			</Query>
		</>
	);
};

export default DogsPage;
