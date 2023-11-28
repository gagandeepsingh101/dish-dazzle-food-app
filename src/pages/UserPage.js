import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
const UserPage = () => {
	const {
		loginStatus,
	} = useContext(UserContext);
	return (
		<div className=" h-[80vh] flex items-center py-10">
			<div className="w-full lg:w-1/2 flex flex-col gap-1">
			<h1 className="text-4xl font-bold text-blue-950 text-center md:text-5xl">{loginStatus?"Logout Page":"Login Page"}</h1>
				<Outlet></Outlet>
			</div>
			<img
				className=" hidden lg:block w-1/2 h-2/3 lg:h-full"
				src="https://cdn.shopify.com/s/files/1/0502/7286/2366/files/crazyjoint_640x640.png?v=1622797540"
				alt=""
			/>
		</div>
	);
};
export default UserPage;
