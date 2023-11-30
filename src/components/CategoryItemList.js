import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

// this component show the item list of a particular category in the menu list page using the redux state variable for it
const CategoryItemList = (props) => {
	const { categoryItemList } = props;

	const cartItems = useSelector((state) => state.cartSlice.cartItems);
	const dispatch = useDispatch();

	return (
		<div className="border-2 w-full h-fit bg-blue-300 rounded-xl flex justify-between px-2 my-3 items-center ">
			<div className="flex flex-col gap-1 w-8/12 py-1">
				<h1 className="text-xs font-bold md:text-lg lg:text-2xl text-blue-900">
					{categoryItemList?.info?.name}
				</h1>
				<p className="hidden md:block text-clip md:text-[12px] lg:text-[16px]">
					{categoryItemList?.info?.description}
				</p>
				<p className="text-xs font-bold md:text-lg">
					₹
					{categoryItemList?.info?.price / 100 ||
						categoryItemList?.info?.defaultPrice / 100}
				</p>
			</div>

			{categoryItemList?.info?.imageId ? (
				<div className=" w-4/12 h-fit  lg:w-2/12 relative p-1 lg:p-3">
					<img
						className="h-[40px] md:h-[70px] lg:h-[100px] w-full rounded-xl"
						srcSet={IMG_CDN_URL + categoryItemList?.info?.imageId}
					/>
					<button
						onClick={() => dispatch(addItem(categoryItemList))}
						className="hidden md:block bg-white text-blue-900 transition duration-500 ease-linear  p-2 rounded-xl absolute top-0 lg:top-3 hover:bg-blue-900 hover:text-white">
						Add +
					</button>
				</div>
			) : (
				<div className="w-4/12 h-full  lg:w-2/12 flex justify-center items-center">
					<button
						onClick={() => dispatch(addItem(categoryItemList))}
						className="hidden md:block bg-white text-blue-900 transition duration-500 ease-linear hover:bg-blue-900 hover:text-white p-2 rounded-xl">
						Add +
					</button>
				</div>
			)}
			<button
				onClick={() => dispatch(addItem(categoryItemList))}
				className="block md:hidden text-xs w-1/4 rounded-xl p-1 bg-white text-blue-900 transition duration-500 ease-linear hover:bg-blue-900 hover:text-white">
				Add +
			</button>
		</div>
	);
};

export default CategoryItemList;
