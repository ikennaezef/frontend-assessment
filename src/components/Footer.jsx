import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#091E42] py-20">
			<div className="text-white flex flex-col lg:flex-row space-y-12 lg:space-y-0 items-center justify-between container mx-auto">
				<div className="flex flex-col items-center lg:items-start">
					<img
						src="/images/logo_light.svg"
						alt="logo"
						className="w-[164px] lg:[w-240px]"
					/>
					<p className="mt-2">Throw paperwork into the trash</p>
				</div>
				<div className="flex flex-col items-center lg:items-end">
					<div className="flex items-center space-x-3 mb-3">
						<img
							src="/images/icon_facebook.svg"
							alt="facebook icon"
							className="w-6 h-6 object-cover"
						/>
						<img
							src="/images/icon_twitter.svg"
							alt="twitter icon"
							className="w-6 h-6 object-cover"
						/>
						<img
							src="/images/icon_linkedin.svg"
							alt="linkedin icon"
							className="w-6 h-6 object-cover"
						/>
						<img
							src="/images/icon_instagram.svg"
							alt="instagram icon"
							className="w-6 h-6 object-cover"
						/>
					</div>
					<p className="text-xs lg:text-base">
						Copyright © Genesys DevStudio . All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
