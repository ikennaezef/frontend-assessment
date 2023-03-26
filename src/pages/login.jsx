import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserInfo } from "../components";

const Login = () => {
	const [inputValues, setInputValues] = useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [inputIsFocused, setInputIsFocused] = useState(false);
	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);
	const validateEmail = (mail) => {
		return mail.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};

	const handleClick = () => {
		if (currentStep === 1) {
			setCurrentStep(2);
		}
	};

	const editHandler = () => {
		setCurrentStep(1);
	};

	const handleInputChange = (value, fieldName) => {
		setInputValues((currentValues) => {
			return {
				...currentValues,
				[fieldName]: value,
			};
		});
		if (fieldName === "email") {
			if (value.length > 7) {
				if (validateEmail(value)) {
					setButtonIsDisabled(false);
				} else {
					setButtonIsDisabled(true);
				}
			}
		}
	};

	const togglePassword = () => {
		setShowPassword((currentValue) => !currentValue);
	};

	return (
		<div className="p-10 shadow-authCard rounded-lg w-[480px]">
			<div className="mb-8">
				<h1 className="text-2xl text-primary text-center font-bold mb-4">
					Login
				</h1>
				<p className="text-sm text-neutral500 text-center">
					Access your resource edge account
				</p>
			</div>
			{currentStep === 2 && (
				<UserInfo email={inputValues.email} onEdit={editHandler} />
			)}
			{currentStep === 1 && (
				<div className="flex flex-col space-y-2">
					<label className="text-primary font-medium">Email Address</label>
					<div
						className={`flex items-center py-2 px-3 h-10 border-2 ${
							inputIsFocused ? "border-inputOutline" : "border-inputBorder"
						} rounded`}>
						<input
							type="text"
							value={inputValues.email}
							onChange={(e) => handleInputChange(e.target.value, "email")}
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
			)}
			{currentStep === 2 && (
				<div className="flex flex-col space-y-2">
					<label className="text-primary font-medium">Password</label>
					<div
						className={`flex items-center py-2 px-3 h-10 border-2 ${
							inputIsFocused ? "border-inputOutline" : "border-inputBorder"
						} rounded`}>
						<input
							type={showPassword ? "text" : "password"}
							value={inputValues.password}
							onChange={(e) => handleInputChange(e.target.value, "password")}
							placeholder="Enter password"
							className="text-sm text-neutral500 w-full outline-none"
							onFocus={() => setInputIsFocused(true)}
							onBlur={() => setInputIsFocused(false)}
						/>
						<button onClick={togglePassword}>
							<img
								src={
									showPassword
										? "/images/icon_eye_filled.svg"
										: "/images/icon_eye.svg"
								}
								alt="eye icon"
							/>
						</button>
					</div>
				</div>
			)}
			<button
				onClick={handleClick}
				className={`${
					buttonIsDisabled ? "bg-light50" : "bg-accent"
				} h-10 w-full rounded my-8`}></button>
			<div className="border-t border-t-inputBorder pt-4 mt-6 flex justify-center">
				<Link to="/auth/reset_password">
					<button className="text-accent text-sm text-center">
						Forgot Password?
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Login;
