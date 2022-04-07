import React from "react";
import "./Weather.css";

const Input = (props) => {
	return (
		<input
			placeholder={props.placeholder}
			type={props.type}
			className={props.className}
			onChange={props.onChange}
			value={props.value}
		></input>
	);
};

export default Input;
