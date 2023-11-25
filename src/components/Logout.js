import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
const Logout = () => {
	const { userName, loginStatus, setLiveLoginStatus } = useContext(UserContext);
	return (
		<div
			className="flex flex-col items-center mt-5 gap-4
    ">
			<h1 className="text-center text-2xl font-bold text-blue-900">You have login as {userName}</h1>
			<div className="flex justify-between w-7/12 mt-5">
				<Link 
					onClick={() => {
						setLiveLoginStatus(!loginStatus);
					}}
					to={"/user/"}
					className="text-xl bg-blue-100 px-4 py-3 rounded-xl border-4 border-blue-300 hover:bg-blue-900 hover:text-white">
					Go To Login Page
				</Link>
				<Link to={"/"} className="text-xl bg-blue-100 px-4 py-3 rounded-xl border-4 border-blue-300 hover:bg-blue-900 hover:text-white">
					Go To Home
				</Link>
			</div>
		</div>
	);
};

export default Logout;
