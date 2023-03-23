import React from "react";
import { Footer, TopNav } from "./components";

const cardContent = [
	{
		id: 1,
		icon: "/icon_users.svg",
		title: "Employee Management",
		content:
			"From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team.",
	},
	{
		id: 2,
		icon: "/icon_mountain.svg",
		title: "Performance Management",
		content:
			"Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews. ",
	},
	{
		id: 3,
		icon: "/icon_calendar.svg",
		title: "Paid time off",
		content:
			"Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance.",
	},
];

const adminCards = [
	{
		id: 1,
		icon: "/icon_travel.svg",
		title: "Travel & Logistics",
		content:
			"Make travel requests, get approvals, and have access to travel information.",
	},
	{
		id: 2,
		icon: "/icon_briefcase.svg",
		title: "Asset Management",
		content:
			"Manage the acquisition, assignment, and disposition of assets seamlessly.",
	},
];

const financeCards = [
	{
		id: 1,
		icon: "/icon_clipboard.svg",
		title: "RE Vouchers",
		content:
			"Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers",
	},
	{
		id: 2,
		icon: "/icon_envelope.svg",
		title: "Payroll",
		content:
			"Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes.",
	},
];

const HomePage = () => {
	return (
		<div className="relative">
			<TopNav />
			<section className="grid grid-cols-1 lg:grid-cols-3 items-center container mx-auto px-2">
				<div className="col-span-1">
					<h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 mt-16 lg:-mt-16 leading-12">
						Throw paperwork into the trash where it belongs.
					</h1>
					<p className="text-light600">
						Eliminate all the hassle involved in managing people operations by
						automating it.
					</p>
				</div>
				<div className="col-span-1 lg:col-span-2">
					<img
						src="/images/hero_image.svg"
						alt="person relaxing"
						className="w-full max-w-fit"
					/>
				</div>
			</section>
			<section className="bg-light50  px-2 py-20">
				<div className="container mx-auto">
					<div className="w-full lg:w-[450px]">
						<h2 className="text-3xl lg:text-5xl text-primary font-bold mb-4">
							Human Resources
						</h2>
						<p className="text-neutral">
							Onboard new employees, manage the employee lifecycle and measure
							employee performance.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:mt-20 mb-12">
						{cardContent.map((card) => (
							<div
								key={card.id}
								className="p-8 pb-10 rounded-2xl shadow-card bg-white flex flex-col space-y-3">
								<img
									src={`/images${card.icon}`}
									alt="icon"
									className="w-10 h-10 rounded-full object-cover mb-4"
								/>
								<h4 className="text-xl text-primary font-bold">{card.title}</h4>
								<p className="text-neutral">{card.content}</p>
							</div>
						))}
					</div>
					<img src="/images/employee.png" alt="employees directory" />
				</div>
			</section>
			<section className="py-24 bg-bg-pattern bg-center bg-cover bg-repeat">
				<div className="container mx-auto px-2">
					<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-28">
						<div className="w-full lg:max-w-[550px]">
							<h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
								Admin & Logistics
							</h2>
							<p className="text-light600">
								Manage and track company assets as well as logistics for
								travelling employees
							</p>
						</div>
						<div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 pl-8 lg:pl-0">
							{adminCards.map((card) => (
								<div key={card.id} className="flex flex-col space-y-4">
									<img
										src={`/images${card.icon}`}
										alt="icon"
										className="w-10 h-10 rounded-full object-cover mb-4"
									/>
									<h4 className="text-xl lg:text-2xl font-bold text-primary">
										{card.title}
									</h4>
									<p className="text-light600">{card.content}</p>
								</div>
							))}
						</div>
					</div>
					<img
						src="/images/logistics.png"
						alt="travel and logistics"
						className="max-w-full"
					/>
					<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-28">
						<div className="w-full lg:max-w-[550px]">
							<h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
								Finance
							</h2>
							<p className="text-light600">
								Generate invoices, track expenditure, and manage complex
								payrolls for multiple teams and companies
							</p>
						</div>
						<div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0 pl-8 lg:pl-0">
							{financeCards.map((card) => (
								<div key={card.id} className="flex flex-col space-y-4">
									<img
										src={`/images${card.icon}`}
										alt="icon"
										className="w-10 h-10 rounded-full object-cover mb-4"
									/>
									<h4 className="text-xl lg:text-2xl font-bold text-primary">
										{card.title}
									</h4>
									<p className="text-light600">{card.content}</p>
								</div>
							))}
						</div>
					</div>
					<img src="/images/payroll.png" alt="payroll" className="max-w-full" />
					<div className="grid grid-cols-2 gap-6 lg:gap-0 lg:flex items-center lg:justify-between lg:space-x-4 py-12 px-4">
						<div className="order-1 lg:order-none">
							<img
								src="/images/unn.png"
								alt="unn logo"
								className="max-w-full"
							/>
						</div>
						<div className="order-4 lg:order-none">
							<img
								src="/images/tenece.png"
								alt="tenece logo"
								className="max-w-full w-[80px] lg:w-auto"
							/>
						</div>
						<div className="order-3 lg:order-none">
							<img src="/images/pe.png" alt="pe logo" className="max-w-full" />
						</div>
						<div className="order-2 lg:order-none">
							<img
								src="/images/genesys.png"
								alt="genesys logo"
								className="max-w-full w-[100px] lg:w-auto"
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default HomePage;
