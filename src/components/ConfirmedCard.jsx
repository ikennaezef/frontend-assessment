import React from "react";

const ConfirmedCard = ({ message }) => {
	return (
		<div className="flex flex-col items-center justify-center space-y-10">
			<img
				src="/images/icon_check_circle.svg"
				alt="check icon"
				className="w-[128px] h-[128px]"
			/>
			<p className="text-primary max-w-[360px] text-center">{message}</p>
		</div>
	);
};

export default ConfirmedCard;
