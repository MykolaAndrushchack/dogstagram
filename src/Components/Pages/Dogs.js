import React from 'react';
import { Card } from 'semantic-ui-react';
import CartComponent from '../Cart/Cart';

import dogsArr from '../../data.json';

const DogsPage = () => {
	return (
		<>
			<h1>Dogs Page</h1>
			<Card.Group className='ui centered'>
				{dogsArr.map((dog, index) => {
					return (
						<CartComponent
							key={index}
							dogs={dog}
							button='Add to My dogs'
							buttonDelete={false}
						/>
					);
				})}
			</Card.Group>
		</>
	);
};

export default DogsPage;
