import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-3xl font-bold mb-4">Oops!</h1>
			<p>Sorry, an unexpected error has occured</p>
		</div>
	);
};

export default ErrorPage;
