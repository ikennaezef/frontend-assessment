import React from "react";

const UserInfo = ({ email, onEdit }) => {
	return (
		<div className="flex items-center justify-center w-full mb-6">
			<div>
				<h2 className="text-lg text-primary50 font-bold">Ositadinma Nwangwu</h2>
				<p className="text-sm text-neutral100">{email}</p>
			</div>
			<button className="p-2" onClick={onEdit}>
				<img src="/images/icon_edit.svg" alt="edit icon" />
			</button>
		</div>
	);
};

export default UserInfo;
