import React from 'react';

const Form = ({ onChange, handleSubmit, title }) => {
	return (
		<form onSubmit={handleSubmit}>
		<label htmlFor="title">{title}</label>
		<input
				type="text"
				id="title"
				onChange={onChange}
				value={title}
		/>
		<input type="submit" />
		</form>
	);
}

export default Form;