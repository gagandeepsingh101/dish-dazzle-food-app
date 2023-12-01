import React, { useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import CartPage from "../src/pages/CartPage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";
import UserPage from "../src/pages/UserPage";
import {UserContext} from "../src/utils/UserContext";
import Login from "../src/components/LoginIn";
import Logout from "../src/components/Logout";
import RestaurantsMenuList from "../src/components/RestaurantsMenuList";
import mainStore from "../src/utils/store/mainStore";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

// This is main component which handle rendering the all compoenet of whole app with routing
function App() {
	const [userLoginName, setUserLoginName] = useState("Guest");
	const [liveLoginStatus, setLiveLoginStatus] = useState(false);
	const [noticationMessage, setNotificationMessage] = useState("");
	return (
		<>
			<Provider store={mainStore}>
				<UserContext.Provider
					value={{
						noticationMessage,
						setNotificationMessage,
						userName: userLoginName,
						loginStatus: liveLoginStatus,
						setLiveLoginStatus,
						setUserLoginName,
					}}>
					<div className="relative w-screen h-screen overflow-hidden">
					<Toaster />
						<Header></Header>
						<Outlet></Outlet>
						<Footer></Footer>
					</div>
				</UserContext.Provider>
			</Provider>
		</>
	);
}

// Creating a routing for the app for different pages and components
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
				path: "/menu/:resturantId/:resturantName",
				element: <RestaurantsMenuList></RestaurantsMenuList>,
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
				path: "/user",
				element: <UserPage></UserPage>,
				children: [
					{
						path: "/user/",
						element: <Login></Login>,
					},
					{
						path: "/user/logout",
						element: <Logout></Logout>,
					},
				],
			},
		],
	},
]);

// Rendering the app component in root id element of html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routing} />);
