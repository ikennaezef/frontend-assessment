import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/home";
import "./index.css";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/login";
import ResetPassword from "./pages/reset-password";
import EmailSentPage from "./pages/email-sent";
import ChangePassword from "./pages/change-password";
import ResetSuccessful from "./pages/reset-successful";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "reset_password",
				element: <ResetPassword />,
			},
			{
				path: "email_sent",
				element: <EmailSentPage />,
			},
			{
				path: "change_password",
				element: <ChangePassword />,
			},
			{
				path: "reset_successful",
				element: <ResetSuccessful />,
			},
		],
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
