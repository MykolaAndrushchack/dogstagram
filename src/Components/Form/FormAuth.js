import React from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { Form, Button } from 'semantic-ui-react';

import InputForm from './Input';

class FormAuth extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				name: '',
				password: ''
			},
			errors: {}
		};
		this.validator = new SimpleReactValidator();
	}

	onChange = e => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	onSubmit = () => {
		if (this.validator.allValid()) {
			this.props.submit(this.state.data);
		} else {
			this.validator.showMessages();
			// rerender to show messages for the first time
			this.forceUpdate();
		}
	};

	render() {
		const { data } = this.state;
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<InputForm
						data={data.name}
						name='name'
						type='text'
						label='Name'
						onChange={this.onChange}
					/>
					{this.validator.message('Name', data.name, 'required')}
				</Form.Field>

				<Form.Field>
					<InputForm
						data={data.password}
						name='password'
						type='password'
						label='Password'
						onChange={this.onChange}
					/>
					{this.validator.message('password', data.password, 'required')}
				</Form.Field>
				<Button primary>{this.props.button}</Button>
			</Form>
		);
	}
}

export default FormAuth;
