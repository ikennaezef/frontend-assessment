import { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
	const [navIsOpen, setNavIsOpen] = useState(false);

	const toggleNav = () => {
		setNavIsOpen((prevValue) => !prevValue);
	};

	return (
		<nav className="relative flex items-center justify-between py-3 px-2 container mx-auto">
			<div className="hidden lg:block">
				<Link to="/">
					<img src="/images/logo_main.svg" alt="logo" />
				</Link>
			</div>
			<div className="block lg:hidden">
				<Link to="/">
					<img src="/images/logo_small.svg" alt="logo" />
				</Link>
			</div>
			<div className="hidden lg:flex items-center space-x-4">
				<button className="text-light200">Sign up</button>
				<button className="rounded-sm bg-accent text-white py-2 px-4">
					Sign in
				</button>
			</div>
			<button className="block lg:hidden" onClick={toggleNav}>
				<img src="/images/icon_menu.svg" alt="menu icon" />
			</button>
			<div
				className={`block lg:hidden bg-white w-full absolute transition-all ${
					navIsOpen ? "top-12" : "-top-[400%]"
				}`}>
				<div className="p-3 py-6">
					<button className="text-primary w-full mb-4">Features</button>
					<button className="text-primary w-full">About</button>
					<div className="flex flex-col space-y-2 mt-6">
						<button className="text-white bg-accent rounded-md py-2 w-full">
							Log In
						</button>
						<button className="text-light200 bg-light50 rounded-md py-2 w-full">
							Sign up
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default TopNav;
