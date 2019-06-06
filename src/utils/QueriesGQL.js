import gql from 'graphql-tag';

export const GET_ME = gql`
	query Me {
		me {
			username
			dogs {
				name
				sex
				breed
			}
		}
	}
`;
