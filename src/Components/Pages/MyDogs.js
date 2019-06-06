import React from 'react';
import { Link } from 'react-router-dom';
import CardDog from '../Cart/CardDog';
import Me from '../Me/Me';

class MyDogs extends React.Component {
	render() {
		return (
			<>
				<Link to='/my-dogs/new'>+ADD</Link>
				<Me />
				<CardDog />
			</>
		);
	}
}

export default MyDogs;
