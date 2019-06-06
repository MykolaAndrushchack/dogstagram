import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import FormDog from '../../Form/FormDog';
import { Loader } from '../../Loader/Loader';

const CREATEDOG = gql`
	mutation createDog(
		$name: String!
		$breed: String!
		$dob: String!
		$sex: Sex!
		$status: String!
	) {
		createDog(
			name: $name
			breed: $breed
			dob: $dob
			sex: $sex
			status: $status
		) {
			_id
			name
			breed
			dob
			sex
			status
		}
	}
`;

class DogsControll extends React.Component {
	render() {
		return (
			<>
				<Mutation mutation={CREATEDOG}>
					{(createDog, { data, loading, error }) => {
						if (loading) return <Loader />;
						if (error) return `Error! ${error.message}`;
						return (
							<>
								<FormDog
									title='Create Dog'
									button='Create'
									submit={({ dogname, breed, dob, sex, status }) => {
										createDog({
											variables: { name: dogname, breed, dob, sex, status }
										});

										this.props.history.push('/my-dogs');
									}}
								/>
							</>
						);
					}}
				</Mutation>
			</>
		);
	}
}

export default DogsControll;
