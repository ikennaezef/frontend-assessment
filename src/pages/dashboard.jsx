import React from "react";
import { DashboardNav } from "../components";

const Dashboard = () => {
	return (
		<div>
			<DashboardNav />
			<section className="pt-24">
				<div className="container mx-auto">
					<div className="pl-16">
						<div>
							<h1 className="text-3xl font-semibold text-primary mb-4">
								Hello, Ositadinma Nwangwu
							</h1>
							<p className="text-sm">Welcome and good to have you back.</p>
						</div>
						<div className="mt-16">
							<h2 className="text-primary50 text-2xl font-bold mb-2">
								Things to do
							</h2>
							<div className="flex flex-col space-y-2">
								<div className="p-4 max-w-[744px] h-20 flex items-center justify-between border border-[#dddddd]">
									<div className="flex items-center space-x-5">
										<span className="w-6 h-6 bg-[#f3f3f3] rounded-full border border-[#dddddd]"></span>
										<p className="text-dark text-sm">
											Upload your employee performance agreement
										</p>
									</div>
									<button className="text-accent text-sm font-medium">
										Begin
									</button>
								</div>
								<div className="p-4 max-w-[744px] h-20 flex items-center justify-between border border-[#dddddd]">
									<div className="flex items-center space-x-5">
										<span className="w-6 h-6 bg-[#f3f3f3] rounded-full border border-[#dddddd]"></span>
										<p className="text-dark text-sm">
											Start quarterly self review
										</p>
									</div>
									<button className="text-[#42526E] text-sm font-medium">
										Resume
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
