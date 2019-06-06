import React from 'react';
import { Link } from 'react-router-dom';

import FormAuth from '../Form/FormAuth';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { Loader } from '../Loader/Loader';
import InlineError from '../InlineError';
import { Button } from 'semantic-ui-react';

const LOGIN = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
			expiresAt
		}
	}
`;

const LoginPage = props => {
	return (
		<ApolloConsumer>
			{client => (
				<Mutation
					mutation={LOGIN}
					onCompleted={({ login: { token } }) => {
						client.writeData({ data: { isLoggedIn: true } });
						localStorage.setItem('token', token);
						props.history.push('/dogs');
					}}
				>
					{(login, { data, loading, error }) => {
						if (loading) return <Loader />;
						return (
							<>
								<h1>Login Page</h1>
								{error && <InlineError text={error.message} />}
								<FormAuth
									loading={loading}
									button='Login'
									switch='Sign Up'
									link='/sign-up'
									error={error}
									submit={({ name, password }) => {
										login({ variables: { username: name, password } });
									}}
								/>
								<Button basic color='purple' size='small'>
									<Link to='/sign-up'>Switch to Sign Up</Link>
								</Button>
							</>
						);
					}}
				</Mutation>
			)}
		</ApolloConsumer>
	);
};

export default LoginPage;
