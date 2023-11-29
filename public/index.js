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
import UserContext from "../src/utils/UserContext";
import Login from "../src/components/LoginIn";
import Logout from "../src/components/Logout";
import RestaurantsMenuList from "../src/components/RestaurantsMenuList";
import mainStore from "../src/utils/store/mainStore";
import { Provider } from "react-redux";

function App() {
	const [userLoginName, setUserLoginName] = useState("Guest");
	const [liveLoginStatus, setLiveLoginStatus] = useState(false);
	return (
		<Provider store={mainStore}>
			<UserContext.Provider
				value={{
					userName: userLoginName,
					loginStatus: liveLoginStatus,
					setLiveLoginStatus,
					setUserLoginName,
				}}>
				<div className="relative w-screen h-screen overflow-hidden">
					<Header></Header>
					<Outlet></Outlet>
					<Footer></Footer>
				</div>
			</UserContext.Provider>
		</Provider>
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routing} />);
