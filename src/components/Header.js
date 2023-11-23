import React, { useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Header = () => {
	const [tooggleMenu, setToggleMenu] = useState(false);
	function handleToogleMenu(e) {
		const navList =
			e.target.parentElement.parentElement.getElementsByTagName("ul");
		const menu = e.target.parentElement.getElementsByTagName("i");
		if (!tooggleMenu) {
			menu[0].classList.add("hidden");
			menu[1].classList.remove("hidden");
			navList[0].classList.remove("opacity-0");
			navList[0].classList.add("translate-y-2");
			navList[0].classList.remove("translate-y-0");
			setToggleMenu(true);
		} else {
			menu[1].classList.add("hidden");
			menu[0].classList.remove("hidden");
			navList[0].classList.add("opacity-0");
			navList[0].classList.add("translate-y-0");
			navList[0].classList.remove("translate-y-2");
			setToggleMenu(false);
		}
	}
	return (
		<div className="h-1/6 w-full overflow-hidden bg-blue-200 flex items-center justify-between p-4 lg:px-8">
			<div className="cursor-pointer flex items-center justify-center gap-2 md:flex-col">
				<img
					className=" w-10 h-10 lg:w-16 lg:h-16"
					srcSet="https://www.freeiconspng.com/uploads/food-icon-7.png"
					alt=""
				/>
				<h4 className=" text-blue-950 font-bold text-sm lg:text-lg">
					DishDazzle
				</h4>
			</div>
			<button
				onClick={(e) => handleToogleMenu(e)}>
				<i className="ri-menu-line font-bold md:hidden text-3xl text-blue-950"></i>
				<i className="ri-close-fill hidden font-bold md:hidden text-3xl text-blue-950"></i>
			</button>
			<ul className="opacity-0 absolute bg-blue-200 w-1/2 h-fit top-16 p-3 right-0 flex flex-col gap-3 items-center transition duration-500 ease-out rounded-bl-3xl md:opacity-100 md:translate-x-0 md:relative md:w-fit md:h-fit md:rounded-bl-none md:bg-transparent md:flex-row md:top-0  lg:gap-8">
				<li className="cursor-pointer text-lg font-bold hover:bg-blue-800 hover:text-white px-3 py-1 rounded-lg lg:text-2xl">
					<Link to={"/"}>Home</Link>
				</li>
				<li className="cursor-pointer text-lg font-bold hover:bg-blue-800 hover:text-white px-3 py-1 rounded-lg lg:text-2xl">
					<Link to={"/about"}>About</Link>
				</li>
				<li className="cursor-pointer text-lg font-bold hover:bg-blue-800 hover:text-white px-3 py-1 rounded-lg lg:text-2xl">
					<Link to={"/contact"}>Contact</Link>
				</li>
				<li className="cursor-pointer text-lg font-bold hover:bg-blue-800 hover:text-white px-3 py-1 rounded-lg lg:text-2xl">
					<Link to={"/cart"}>Cart</Link>
				</li>
				<li className="cursor-pointer text-lg font-bold hover:bg-blue-800 hover:text-white px-3 py-1 rounded-lg lg:text-2xl">
					<Link to={"/login"}>Login</Link>
				</li>
			</ul>
		</div>
	);
};
export default Header;
