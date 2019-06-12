import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import FormDog from '../../Form/FormDog';
import { Loader } from '../../Loader/Loader';
/*
const CREATEDOG = gql`
	mutation createDog {
		createDog(
			name: "dogsssfd"
			breed: "newDog"
			dob: "2554548485"
			sex: male
			status: "good"
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
*/

const CreateDog = gql`
	mutation createDog(
		$name: String!
		$breed: String!
		$dob: String!
		$sex: Sex!
	) {
		createDog(name: $name, breed: $breed, dob: $dob, sex: $sex) {
			name
			breed
			dob
			sex
		}
	}
`;

const DogsCreate = props => {
	return (
		<Mutation
			mutation={CreateDog}
			onCompleted={({ createDog: { name, sex, breed, dob } }) => {
				console.log('datas to server -->', name, sex, breed, dob);
			}}
		>
			{(createDog, { data, loading, error }) => {
				if (loading) return <Loader />;
				if (error) return `Error ${error}`;
				return (
					<FormDog
						title='Create Dog'
						button='Create'
						submit={({ dogname, breed, sex, status, dob }) => {
							console.log('submited datas', dogname, breed, sex, dob);
							createDog({
								variables: { name: dogname, breed, sex, status, dob }
							});
						}}
					/>
				);
			}}
		</Mutation>
	);
};
/*
const DogsControll = props => {
	return (
		<>
			<Mutation
				mutation={CREATEDOG}
				onCompleted={({ createDog: { name, sex, breed, dob } }) => {
					console.log('datas to server -->', name, sex, breed, dob);
					props.history.push('/my-dogs');
				}}
			>
				{(createDog, { data, loading, error }) => {
					if (loading) return <Loader />;
					if (error) return `Error! ${error.message}`;
					return (
						<FormDog
							title='Create Dog'
							button='Create'
							submit={({ dogname, breed, dob, sex, status }) => {
								createDog({
									variables: {
										name: dogname,
										breed,
										dob,
										sex,
										status
									}
								});
							}}
						/>
					);
				}}
			</Mutation>
		</>
	);
};
*/

export default DogsCreate;
