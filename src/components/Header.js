import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { APP_LOGO } from "../utils/constant";

// Create Header Component which handle the toggle menu and directing the user to different pages
const Header = () => {
	// using the useSelector hook to get the total number of items in cart
	const totalCartItems = useSelector(
		(state) => state.cartSlice.cartItems
	)?.length;

	// using the useContext hook to get the user login status and name
	const { loginStatus, userName } = useContext(UserContext);

	// create state variable for toggle menu
	const [tooggleMenu, setToggleMenu] = useState(false);

	// this function is used to toggle the menu which which make visible or hidden a menu list according menu image
	function handleToogleMenu(e) {
		const navList =
			e.target.parentElement.parentElement.getElementsByTagName("ul");
		const menu = e.target.parentElement.getElementsByTagName("i");
		if (!tooggleMenu) {
			menu[0].classList.add("hidden");
			menu[1].classList.remove("hidden");
			navList[0].classList.remove("hidden");
			navList[0].classList.add("flex");
			navList[0].classList.add("translate-y-0");
			navList[0].classList.add("-translate-y-full");
		} else {
			menu[1].classList.add("hidden");
			menu[0].classList.remove("hidden");
			navList[0].classList.add("hidden");
			navList[0].classList.remove("flex");
			navList[0].classList.remove("-translate-y-full");
			navList[0].classList.remove("translate-y-0");
		}
		setToggleMenu(!tooggleMenu);
	}
	return (
		<div className="h-[15vh] w-full overflow-hidden bg-blue-200 flex items-center justify-between p-4 lg:px-8">
			<div className="w-2/12 cursor-pointer flex items-center justify-center gap-2 flex-col md:flex-row">
				<img className="w-10 h-10 lg:w-20 lg:h-20" srcSet={APP_LOGO} alt="" />
				<h4 className=" hidden md:block text-blue-950 font-bold text-sm lg:text-xl">
					DishDazzle
				</h4>
			</div>
			<div className="flex w-9/12 items-end justify-end md:hidden gap-2 px-3">
				<div className="cursor-pointer text-2xl font-bold text-blue-950 md:px-3 py-1 rounded-lg lg:text-2xl">
					<Link to={"/cart"}>
						<i className="ri-shopping-cart-2-fill"></i>{" "}
						<sup>{totalCartItems}</sup>
					</Link>
				</div>
				<div className="cursor-pointer text-2xl font-bold text-blue-950 md:px-3 py-1 rounded-lg lg:text-2xl">
					<Link to={loginStatus ? "/user/logout" : "/user/"}>
						<i className="ri-user-fill"></i>
					</Link>
				</div>
			</div>
			<button className="w-1/12" onClick={(e) => handleToogleMenu(e)}>
				<i className="ri-menu-line font-bold md:hidden text-3xl text-blue-950"></i>
				<i className="ri-close-fill hidden font-bold md:hidden text-3xl text-blue-950"></i>
			</button>
			<ul className=" z-50  hidden absolute bg-blue-200 w-1/2 h-fit top-20 p-3 right-0 flex-col gap-3 items-center transition duration-500 ease-out rounded-bl-3xl md:opacity-100 md:translate-x-0 md:relative md:block md:flex-row md:w-fit md:h-fit md:rounded-bl-none md:bg-transparent md:flex md:flex-row md:top-0  lg:gap-8">
				<li className="cursor-pointer text-lg font-bold hover:bg-blue-800 hover:text-white px-3 py-1 rounded-lg lg:text-2xl">
					<Link to={"/"}>Home</Link>
				</li>
				<li className="cursor-pointer text-lg font-bold hover:bg-blue-800 hover:text-white px-3 py-1 rounded-lg lg:text-2xl">
					<Link to={"/about"}>About</Link>
				</li>
				<li className="cursor-pointer text-lg font-bold hover:bg-blue-800 hover:text-white px-3 py-1 rounded-lg lg:text-2xl">
					<Link to={"/contact"}>Contact</Link>
				</li>
				<li className=" hidden md:block cursor-pointer text-2xl font-bold text-blue-950 py-1 rounded-lg lg:text-2xl">
					<Link to={"/cart"}>
						<i className="ri-shopping-cart-2-fill"></i>
						<sup>{totalCartItems}</sup>
					</Link>
				</li>
				{
					// show the user login name after login in login page
				}
				<li className="hidden md:block cursor-pointer  font-bold text-blue-950 py-1 rounded-lg">
					<Link to={loginStatus ? "/user/logout" : "/user/"}>
						<div className="flex items-center gap-2">
							<i className="ri-user-fill text-2xl"></i>
							<p className="hidden md:block text-md">
								{" "}
								{loginStatus ? userName.split(" ")[0] : "Login"}
							</p>
						</div>
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default Header;
