import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<div className="relative min-h-screen">
			<img
				src="/images/illustration_1.svg"
				alt="illustration"
				className="hidden md:block absolute bottom-0 left-0 w-[280px] h-[280px]"
			/>
			<img
				src="/images/illustration_2.svg"
				alt="illustration"
				className="hidden md:block absolute bottom-0 right-0 w-[280px] h-[280px]"
			/>
			<div className="flex items-center justify-center w-full pt-8">
				<div className="flex flex-col items-center w-full">
					<img
						src="/images/logo_big.svg"
						alt="logo"
						className="w-[250px] md:w-[300px] mb-12"
					/>
					<div>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
