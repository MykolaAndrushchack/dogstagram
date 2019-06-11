import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import FormAuth from '../Form/FormAuth';
import { Loader } from '../Loader/Loader';
import { Button } from 'semantic-ui-react';

const SIGNUP = gql`
	mutation signUp($username: String!, $password: String!) {
		signUp(username: $username, password: $password) {
			token
			expiresAt
		}
	}
`;

const SignUpPage = props => {
	return (
		<ApolloConsumer>
			{client => (
				<Mutation
					mutation={SIGNUP}
					onCompleted={({ signUp: { token } }) => {
						client.writeData({ data: { isLoggedIn: true } });
						localStorage.setItem('token', token);
						props.history.push('/dogs');
					}}
				>
					{(signUp, { data, loading, error }) => {
						if (loading) return <Loader />;
						return (
							<>
								<h1>Sign Up Page</h1>
								<FormAuth
									button='Sign Up'
									switch='Login'
									link='/login'
									loading={loading}
									error={error}
									submit={({ name, password }) => {
										signUp({ variables: { username: name, password } });
									}}
								/>
								<Button basic color='purple' size='small'>
									<Link to='/login'>Switch to Login</Link>
								</Button>
							</>
						);
					}}
				</Mutation>
			)}
		</ApolloConsumer>
	);
};

export default SignUpPage;
