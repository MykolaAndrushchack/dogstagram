import React from 'react';
import { ApolloConsumer } from 'react-apollo';

const LogoutButton = () => {
	return (
		<ApolloConsumer>
			{client => (
				<button
					onClick={() => {
						client.writeData({ data: { isLoggedIn: false } });
						localStorage.clear();
					}}
				>
					Logout
				</button>
			)}
		</ApolloConsumer>
	);
};

export default LogoutButton;
