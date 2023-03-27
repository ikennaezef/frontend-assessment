import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthCard } from "../components";

const ResetPassword = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState({
		value: "",
		error: false,
	});
	const [inputIsFocused, setInputIsFocused] = useState(false);

	const handleChange = (value) => {
		setEmail({
			...email,
			value,
		});
	};

	const handleClick = () => {
		if (email.value === "") {
			setEmail({
				...email,
				error: true,
			});
		} else {
			navigate("/auth/email_sent");
		}
	};

	return (
		<AuthCard>
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
					className={`flex items-center py-2 px-3 h-10 ${
						email.error ? "border" : "border-2"
					} ${
						inputIsFocused
							? "border-inputOutline"
							: email.error
							? "border-error"
							: "border-inputBorder"
					} rounded`}>
					<input
						type="text"
						value={email.value}
						onChange={(e) => handleChange(e.target.value)}
						placeholder="Enter email"
						className="text-sm w-full outline-none"
						onFocus={() => setInputIsFocused(true)}
						onBlur={() => setInputIsFocused(false)}
					/>
				</div>
				{email.error && (
					<div className="flex items-center space-x-2">
						<img
							src="/images/icon_error.svg"
							alt="error icon"
							className="w-4 h-4"
						/>
						<span className="text-xs text-error">Enter email address</span>
					</div>
				)}
			</div>

			<button
				onClick={handleClick}
				className={`bg-accent h-10 w-full rounded my-8`}></button>
			<div className="border-t border-t-inputBorder pt-4 mt-6 flex justify-center">
				<Link to="/auth/login">
					<button className="text-accent text-sm text-center">
						Back to login
					</button>
				</Link>
			</div>
		</AuthCard>
	);
};

export default ResetPassword;
