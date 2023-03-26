import { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
	const [navIsOpen, setNavIsOpen] = useState(false);

	const toggleNav = () => {
		setNavIsOpen((prevValue) => !prevValue);
	};

	return (
		<nav className="sticky top-0 bg-white ">
			<div className="flex items-center justify-between py-3 px-2 container mx-auto">
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
					<Link to="/auth/login">
						<button className="text-light200">Sign up</button>
					</Link>
					<Link to="/auth/login">
						<button className="rounded bg-accent text-white py-2 px-4">
							Sign in
						</button>
					</Link>
				</div>
				<button className="block lg:hidden" onClick={toggleNav}>
					<img
						src={navIsOpen ? "/images/icon_close.svg" : "/images/icon_menu.svg"}
						alt="menu icon"
					/>
				</button>
				<div
					className={`block lg:hidden bg-white w-screen z-30 absolute left-0 right-0 transition-all ${
						navIsOpen ? "top-16" : "-top-[500%]"
					}`}>
					<div className="p-3 py-8 shadow-sm">
						<button className="text-primary text-left w-full mb-6">
							Features
						</button>
						<button className="text-primary text-left w-full">About</button>
						<div className="flex flex-col space-y-4 mt-10">
							<Link to="/auth/login">
								<button className="text-white bg-accent rounded-md py-2 w-full">
									Log In
								</button>
							</Link>
							<Link to="/auth/login">
								<button className="text-light200 bg-light50 rounded-md py-2 w-full">
									Sign up
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default TopNav;
