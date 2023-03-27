import React, { useState } from "react";
import { Link } from "react-router-dom";

const roles = [
	{
		id: 1,
		title: "Talent Manager",
		icon: "/icon_talent.svg",
	},
	{
		id: 2,
		title: "Employee",
		icon: "/icon_employee.svg",
	},
];

const DashboardNav = () => {
	const [nav, setNav] = useState(false);
	const [selectedRoleId, setSelectedRoleId] = useState(1);
	const [rolesOrder, setRolesOrder] = useState(roles);

	const toggleNav = () => {
		setNav((currentValue) => !currentValue);
	};

	const selectRole = (id) => {
		setSelectedRoleId(id);
		setRolesOrder(
			roles.sort((a) => {
				if (a.id === selectedRoleId) {
					return 1;
				} else {
					return -1;
				}
			})
		);
	};

	return (
		<nav className="shadow-nav">
			<div className="relative h-[72px] py-4 container mx-auto flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<button onClick={toggleNav}>
						<img src="/images/icon_menu_2.svg" alt="menu icon" />
					</button>
					<div
						className={`absolute top-16 left-0 w-[300px] bg-white z-30 transition-all shadow-dashboardNav rounded ${
							nav ? "opacity-100" : "opacity-0"
						}`}>
						<div className="p-5 pb-2">
							<h4 className="text-xs text-light400 font-bold py-3">
								OSITADINMA NWANGWU
							</h4>
							<button className="text-primary text-sm mb-6">Profile</button>
							<div>
								<p className="text-xs text-light400 font-bold mb-4">
									Use Resource Edge as
								</p>
								<div className="flex flex-col space-y-2">
									{rolesOrder.map((role) => (
										<button
											onClick={selectRole.bind(this, role.id)}
											key={role.id}
											className="flex items-center justify-between py-1">
											<div className="flex items-center space-x-3">
												<img
													src={`/images${role.icon}`}
													alt="employee"
													className="w-6 h-6 object-cover"
												/>
												<p className="text-light600 text-sm">{role.title}</p>
											</div>
											<div>
												{selectedRoleId === role.id ? (
													<img src="/images/icon_check.svg" alt="check icon" />
												) : null}
											</div>
										</button>
									))}
								</div>
							</div>
						</div>
						<div className="border-t border-t-[#DFE1E6]">
							<Link to="/auth/login">
								<button className="px-5 py-4 text-sm text-primary50">
									Log Out
								</button>
							</Link>
						</div>
					</div>
					<Link to="/">
						<img
							src="/images/logo_main.svg"
							alt="logo"
							className="w-[144px] object-cover"
						/>
					</Link>
					<h1 className="text-base text-primary">TM Dashboard</h1>
				</div>
				<div>
					<img
						src="/images/profile_image.png"
						alt="user profile"
						className="w-8 h-8 rounded-full object-cover"
					/>
				</div>
			</div>
		</nav>
	);
};

export default DashboardNav;
