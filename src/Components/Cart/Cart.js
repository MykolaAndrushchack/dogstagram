import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const CartComponent = ({
	dogs: { name, breed, dataBirth, sex, status, image },
	button,
	buttonDelete
}) => {
	return (
		<Card>
			<Card.Content>
				<Image floated='right' size='tiny' src={image} />
				<Card.Header>Name: {name}</Card.Header>
				<Card.Header>Breed: {breed}</Card.Header>
				<Card.Meta>Data of birth: {dataBirth}</Card.Meta>
				<Card.Meta>Sex: {sex}</Card.Meta>
				<Card.Description>Status: {status}</Card.Description>
			</Card.Content>
		</Card>
	);
};

export default CartComponent;
