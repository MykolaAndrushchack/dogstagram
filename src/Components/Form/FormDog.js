import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Form, Button } from 'semantic-ui-react';
import InputForm from './Input';

class FormDog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				dogname: '',
				breed: '',
				dob: new Date(),
				sex: '',
				status: '',
				image: ''
			}
		};
	}

	onChange = e => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	handleOptionChange = e => {
		this.setState({
			data: { ...this.state.data, sex: e.target.value }
		});
	};

	handleChange = date => {
		this.setState({
			data: { ...this.state.data, dob: date }
		});
	};

	onSubmit = () => {
		this.props.submit(this.state.data);
	};

	render() {
		const { data } = this.state;
		return (
			<>
				<h1>{this.props.title}</h1>
				<Form onSubmit={this.onSubmit}>
					<Form.Field>
						<InputForm
							data={data.dogname}
							name='dogname'
							type='text'
							label='Dogname'
							onChange={this.onChange}
						/>
					</Form.Field>

					<Form.Field>
						<InputForm
							data={data.breed}
							name='breed'
							type='text'
							label='Breed'
							onChange={this.onChange}
						/>
					</Form.Field>

					<Form.Field>
						<DatePicker
							selected={data.dob}
							onChange={this.handleChange}
							maxDate={new Date()}
						/>
					</Form.Field>

					<Form.Field>
						<Form.Group inline>
							<label>SEX</label>
							<label>
								<input
									type='radio'
									value='male'
									checked={this.state.data.sex === 'male'}
									onChange={this.handleOptionChange}
								/>
								Male
							</label>

							<label>
								<input
									type='radio'
									value='female'
									checked={this.state.data.sex === 'female'}
									onChange={this.handleOptionChange}
								/>
								Female
							</label>
						</Form.Group>
					</Form.Field>

					<Form.Field>
						<InputForm
							data={data.status}
							name='status'
							type='text'
							label='Status'
							onChange={this.onChange}
						/>
					</Form.Field>
					<Button primary>{this.props.button}</Button>
				</Form>
			</>
		);
	}
}

export default FormDog;
