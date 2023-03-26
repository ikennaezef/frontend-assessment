import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
	const [inputIsFocused, setInputIsFocused] = useState(false);

	const validateEmail = (mail) => {
		return mail.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};

	const handleChange = (value) => {
		setEmail(value);
		if (value.length > 7) {
			if (validateEmail(value)) {
				setButtonIsDisabled(false);
			} else {
				setButtonIsDisabled(true);
			}
		}
	};

	const handleClick = () => {};

	return (
		<div className="p-10 shadow-authCard rounded-lg w-[480px]">
			<div className="mb-8">
				<h1 className="text-2xl text-primary text-center font-bold mb-4">
					Reset Password
				</h1>
				<p className="text-sm text-neutral500 text-center">
					To enable us reset your password, enter your email below
				</p>
			</div>
			<div className="flex flex-col space-y-2">
				<label className="text-primary font-medium">Email Address</label>
				<div
					className={`flex items-center py-2 px-3 h-10 border-2 ${
						inputIsFocused ? "border-inputOutline" : "border-inputBorder"
					} rounded`}>
					<input
						type="text"
						value={email}
						onChange={(e) => handleChange(e.target.value)}
						placeholder="Enter email"
						className="text-sm w-full outline-none"
						onFocus={() => setInputIsFocused(true)}
						onBlur={() => setInputIsFocused(false)}
					/>
					{!buttonIsDisabled && (
						<img src="/images/icon_check.svg" alt="check icon" />
					)}
				</div>
			</div>

			<button
				onClick={handleClick}
				className={`${
					buttonIsDisabled ? "bg-light50" : "bg-accent"
				} h-10 w-full rounded my-8`}></button>
			<div className="border-t border-t-inputBorder pt-4 mt-6 flex justify-center">
				<Link to="/auth/login">
					<button className="text-accent text-sm text-center">
						Back to login
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ResetPassword;
