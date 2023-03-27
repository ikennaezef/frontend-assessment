import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthCard } from "../components";

const ChangePassword = () => {
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({
		password: {
			value: "",
			isFocused: false,
			error: {
				state: false,
				message: null,
			},
		},
		confirmPassword: {
			value: "",
			isFocused: false,
			error: {
				state: false,
				message: null,
			},
		},
	});

	const handleInputChange = (value, fieldName) => {
		setInputs((currentValues) => {
			return {
				...currentValues,
				[fieldName]: {
					...currentValues[fieldName],
					value,
				},
			};
		});
	};

	const focusHandler = (value, fieldName) => {
		setInputs((currentValues) => {
			return {
				...currentValues,
				[fieldName]: {
					...currentValues[fieldName],
					isFocused: value,
				},
			};
		});
	};

	const clearErrors = () => {
		setInputs((prevValue) => {
			return {
				password: {
					...prevValue.password,
					error: {
						state: false,
						message: null,
					},
				},
				confirmPassword: {
					...prevValue.confirmPassword,
					error: {
						state: false,
						message: null,
					},
				},
			};
		});
	};

	const validateFields = () => {
		// check for empty states
		if (inputs.password.value === "" && inputs.confirmPassword.value === "") {
			setInputs((prevValue) => {
				return {
					password: {
						...prevValue.password,
						error: {
							state: true,
							message: "Enter password",
						},
					},
					confirmPassword: {
						...prevValue.confirmPassword,
						error: {
							state: true,
							message: "Enter password",
						},
					},
				};
			});
			return false;
		}

		// check for password length
		if (inputs.password.value.length < 6) {
			setInputs((prevValue) => {
				return {
					...prevValue,
					password: {
						...prevValue.password,
						error: {
							state: true,
							message: "Password is too short",
						},
					},
				};
			});

			return false;
		}

		// check for non matching passwords
		if (inputs.password.value !== inputs.confirmPassword.value) {
			setInputs((prevValue) => {
				return {
					...prevValue,
					confirmPassword: {
						...prevValue.confirmPassword,
						error: {
							state: true,
							message: "Confirm password doesn’t match",
						},
					},
				};
			});
			return false;
		}

		return true;
	};

	const submitHandler = () => {
		clearErrors();
		if (validateFields()) {
			navigate("/auth/reset_successful");
		}
	};

	return (
		<AuthCard>
			<div className="mb-8">
				<h1 className="text-2xl text-primary text-center font-bold mb-4">
					Reset Password
				</h1>
				<p className="text-sm text-neutral500 text-center">
					The password should have at least 6 characters
				</p>
			</div>
			<div className="flex flex-col space-y-2 mb-8">
				<label className="text-primary font-medium">New Password</label>
				<input
					type="password"
					value={inputs.password.value}
					onChange={(e) => handleInputChange(e.target.value, "password")}
					placeholder="Enter password"
					className={`py-2 px-3 h-10 border ${
						inputs.password.isFocused
							? "border-inputOutline"
							: inputs.password.error.state
							? "border-error"
							: "border-inputBorder"
					} rounded text-sm w-full outline-none`}
					onFocus={() => focusHandler(true, "password")}
					onBlur={() => focusHandler(false, "password")}
				/>
				{inputs.password.error.state && (
					<div className="flex items-center space-x-2">
						<img
							src="/images/icon_error.svg"
							alt="error icon"
							className="w-4 h-4"
						/>
						<span className="text-xs text-error">
							{inputs.password.error.message}
						</span>
					</div>
				)}
			</div>
			<div className="flex flex-col space-y-2">
				<label className="text-primary font-medium">Confirm password</label>
				<input
					type="password"
					value={inputs.confirmPassword.value}
					onChange={(e) => handleInputChange(e.target.value, "confirmPassword")}
					placeholder="Confirm password"
					className={`py-2 px-3 h-10 border ${
						inputs.confirmPassword.isFocused
							? "border-inputOutline"
							: inputs.confirmPassword.error.state
							? "border-error"
							: "border-inputBorder"
					} rounded text-sm w-full outline-none`}
					onFocus={() => focusHandler(true, "confirmPassword")}
					onBlur={() => focusHandler(false, "confirmPassword")}
				/>
				{inputs.confirmPassword.error.state && (
					<div className="flex items-center space-x-2">
						<img
							src="/images/icon_error.svg"
							alt="error icon"
							className="w-4 h-4"
						/>
						<span className="text-xs text-error">
							{inputs.confirmPassword.error.message}
						</span>
					</div>
				)}
			</div>
			<button
				onClick={submitHandler}
				className={`bg-accent h-10 w-full rounded my-6`}></button>
			<div className="border-t border-t-inputBorder pt-4 mt-2 flex justify-center">
				<Link to="/auth/login">
					<button className="text-accent text-sm text-center">
						Back to login
					</button>
				</Link>
			</div>
		</AuthCard>
	);
};

export default ChangePassword;
