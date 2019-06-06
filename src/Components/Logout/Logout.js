import React from 'react';
import { Redirect } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

const LOGOUT = gql`
	mutation {
		logout
	}
`;

// class Logout extends React.Component {
// 	async componentDidMount() {
// 		const { client } = this.props;
// 		await client.mutate({
// 			mutation: LOGOUT
// 		});
// 		client.resetStore();
// 		localStorage.removeItem('token');
// 	}

// 	render() {
// 		return <Redirect to='/login' />;
// 	}
// }

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
