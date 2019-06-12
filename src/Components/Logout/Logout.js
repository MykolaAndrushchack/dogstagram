import React from 'react';
import { ApolloConsumer } from 'react-apollo';

const Logout = () => {
	return (
		<ApolloConsumer>
			{client => {
				client.writeData({ data: { isLoggedIn: false } });
				localStorage.clear();
			}}
		</ApolloConsumer>
	);
};

export default Logout;
