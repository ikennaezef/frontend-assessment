import React from "react";

const AuthCard = ({ children }) => {
	return (
		<div className="p-6 md:p-10 shadow-authCard rounded-lg w-[360px] md:w-[480px]">
			{children}
		</div>
	);
};

export default AuthCard;
