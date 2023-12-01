import React, { useContext } from "react";
import {UserContext} from "../utils/UserContext";
import { Link } from "react-router-dom";
import { showToast } from "../utils/notification";

// This logout page component is used to redirect the user to login page or to home page which uses Context Api state variables.
const Logout = () => {
	const { userName, loginStatus, setLiveLoginStatus, setUserLoginName } =
		useContext(UserContext);
	return (
		<div
			className="flex flex-col items-center mt-5 gap-4
    ">
			<h1 className="text-center text-lg font-bold text-blue-900 md:text-2xl">
				You have login as {userName}
			</h1>
			<div className="flex flex-col justify-between w-7/12 mt-5 gap-4 md:flex-row">
				<Link
					onClick={() => {
						showToast("Please Login with Email Id");
						setLiveLoginStatus(!loginStatus);
						setUserLoginName("Guest");
					}}
					to={"/user/"}
					className="text-xl bg-blue-100 px-2 py-1 rounded-xl border-4 border-blue-300 hover:bg-blue-900 hover:text-white md:px-4 md:py-3">
					Go To Login Page
				</Link>
				<Link
					to={"/"}
					className="text-xl bg-blue-100 px-2 py-1 rounded-xl border-4 border-blue-300 hover:bg-blue-900 hover:text-white md:px-4 md:py-3">
					Go To Home
				</Link>
			</div>
		</div>
	);
};

export default Logout;
