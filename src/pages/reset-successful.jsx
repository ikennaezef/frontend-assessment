import React from "react";
import { Link } from "react-router-dom";
import { AuthCard, ConfirmedCard } from "../components";

const ResetSuccessful = () => {
	return (
		<AuthCard>
			<div className="mb-8">
				<h1 className="text-2xl text-primary text-center font-bold mb-4">
					Reset Password
				</h1>
			</div>
			<ConfirmedCard message="Your password has been changed successfully" />

			<div className="border-t border-t-inputBorder pt-4 mt-10 flex justify-center">
				<Link to="/auth/login">
					<button className="text-accent text-sm text-center">
						Back to login
					</button>
				</Link>
			</div>
		</AuthCard>
	);
};

export default ResetSuccessful;
