import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./dashboard";
import ErrorPage from "./error-page";
import HomePage from "./home";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/login",
		element: <div>Hello world!</div>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
