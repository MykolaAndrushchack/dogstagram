import React from 'react';

import { Form, Button } from 'semantic-ui-react';
import InputForm from './Form/Input';
import InlineError from './InlineError';

class FormComponent extends React.Component {
	state = {
		data: {
			name: '',
			password: ''
		},
		loading: false,
		errors: {}
	};

	onChange = e => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props.submit(this.state.data).catch(err => {
				this.setState({ errors: err.response.data.errors, loading: false });
			});
		}
	};

	validate = data => {
		const errors = {};
		if (!data.name) errors.name = "Can't be blank";
		if (!data.password && data.password.length < 8)
			errors.password = 'Incorrect password! Try again.';
		return errors;
	};

	render() {
		const { data, loading, errors } = this.state;
		return (
			<Form onSubmit={this.onSubmit} loading={loading}>
				<Form.Field error={!!errors.name}>
					<InputForm
						data={data.name}
						name='name'
						type='text'
						label='Name'
						onChange={this.onChange}
					/>
					{errors.name && <InlineError text={errors.name} />}
				</Form.Field>

				<Form.Field error={!!errors.password}>
					<InputForm
						data={data.password}
						name='password'
						type='password'
						label='Password'
						onChange={this.onChange}
					/>
					{errors.password && <InlineError text={errors.password} />}
				</Form.Field>
				<Button primary>{this.props.button}</Button>
			</Form>
		);
	}
}

export default FormComponent;
