import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const CardDog = () => {
	return (
		<Card>
			<Image
				src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
				wrapped
				ui={false}
			/>
			<Card.Content>
				<Card.Header>Daniel</Card.Header>
				<Card.Meta>Joined in 2016</Card.Meta>
				<Card.Description>
					Daniel is a comedian living in Nashville.
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<div className='ui two buttons'>
					<Button basic color='green'>
						Update
					</Button>
					<Button basic color='red'>
						Delete
					</Button>
				</div>
			</Card.Content>
		</Card>
	);
};

export default CardDog;
