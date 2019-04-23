import React from 'react';

const Form = ({ onChange, handleSubmit, title }) => {
	return (
		<form onSubmit={handleSubmit}>
		<label htmlFor="title">{title}</label>
		<input
				type="text"
				onChange={onChange}
				value={title}
		/>
		<button type='submit'>Submit</button>
		</form>
	);
}

export default Form;