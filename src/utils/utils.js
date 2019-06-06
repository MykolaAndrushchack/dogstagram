import React from 'react';
import { ApolloConsumer } from 'react-apollo';

export const logout = () => (
	<ApolloConsumer>
		{client => {
			client.writeData({ data: { isLoggedIn: false } });
			localStorage.clear();
		}}
	</ApolloConsumer>
);
