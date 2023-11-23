import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import CartPage from "../src/pages/CartPage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";
import LoginPage from "../src/pages/LoginPage";
function App() {
	return (
		<div className="relative w-screen h-screen overflow-hidden">
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
}

const routing = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{
				path: "/",
				element: <HomePage></HomePage>,
			},
			{
				path: "/about",
				element: <AboutPage></AboutPage>,
			},
			{
				path: "/contact",
				element: <ContactPage></ContactPage>,
			},
			{
				path: "/cart",
				element: <CartPage></CartPage>,
			},
			{
				path: "/login",
				element: <LoginPage></LoginPage>,
			},
		],
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routing} />);
