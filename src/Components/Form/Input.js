import React from 'react';

const InputForm = props => {
	return (
		<>
			<label htmlFor={props.name}>{props.label}</label>
			<input
				type={props.type}
				name={props.name}
				id={props.name}
				placeholder={`Enter your ${props.name}`}
				value={props.data}
				onChange={props.onChange}
			/>
		</>
	);
};

export default InputForm;
