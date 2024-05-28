import React, { useState } from "react";
import { useParams } from "react-router";
import {useFetchRestaurantMenuDetail} from "../utils/useFetchRestaurantMenuDetail";
import "remixicon/fonts/remixicon.css";
import { IMG_CDN_URL } from "../utils/constant";
import CategoryList from "./CategoryList";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

// Show Restaurant Menu List for Particular Restaurant Card using Restaurant Id from router
const RestaurantsMenuList = () => {
	const { resturantId } = useParams();
	const [menuPageData, setMenuPageData] = useState([]);
	useFetchRestaurantMenuDetail(resturantId, setMenuPageData);

	console.log(menuPageData[3])
	const resturantInfo = menuPageData[2]?.card?.card?.info;
	
	const categoryList =menuPageData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
		(category) =>
			category.card.card[`@type`] ===
			"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
	);

	const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

	return (
		<div className=" h-[80vh] flex flex-col  py-2">
			{menuPageData.length === 0 && <ShimmerUI uiType="RestaurantMenuList" />}
			{menuPageData.length > 0 && (
				<div className="h-full py-1">
					<div className="w-11/12 mx-auto my-1 h-1/4 flex justify-between px-4 py-2 items-center border-4 rounded-xl border-blue-200">
						<div className="hidden h-full md:block md:w-2/12 lg:w-1/12">
							<img
								src={IMG_CDN_URL + resturantInfo?.cloudinaryImageId}
								className="md:h-full w-full rounded-xl
				 "
								alt=""
							/>
						</div>
						<div className="w-9/12 h-full md:w-7/12 lg:w-8/12 flex flex-col justify-center ">
							<h1 className="font-bold text-md md:text-2xl">
								{resturantInfo?.name}
							</h1>
							<p className="font-extralight text-xs md:text-sm">
								{resturantInfo?.cuisines.join(", ")}
							</p>
							<p className="font-extralight text-xs md:text-sm">
								{resturantInfo?.locality} ,{" "}
								{resturantInfo?.sla?.lastMileTravelString}
							</p>
						</div>
						<div className="w-4/12 md:w-2/12 h-5/6 lg:w-1/12 border-2 border-blue-100 px-1 rounded-lg flex flex-col  justify-evenly items-center lg:py-3 ">
							<p className="md:w-full md:h-full flex gap-1 text-green-700 font-bold items-center justify-center text-lg md:text-xl">
								<i className="ri-star-fill  text-lg  md:text-2xl"></i>
								{resturantInfo?.avgRatingString}
							</p>
							<hr className=" w-full h-1/6 "></hr>
							<p className="flex">
								{resturantInfo?.totalRatingsString?.split(" ")[0]}
								<span className="hidden md:block">Rating</span>
							</p>
						</div>
					</div>
					<div className="h-3/4 md:pb-11 lg:pb-14 overflow-y-scroll scrollbar-hide">
						{categoryList?.length === 0 && (
							<div className="w-full h-full flex flex-col item-center gap-4 pt-4">
								<h1 className="text-xl text-center md:text-3xl">
									No Menu List Found
								</h1>
								<Link to="/" className="text-lg text-center py-1 px-2  bg-blue-900 rounded-xl md:w-4/12 mx-auto text-white md:p-2 md:text-2xl">
									Go To Restaurant List
								</Link>
							</div>
						)}
						{categoryList?.map((category, index) => (
							<CategoryList
								visibleCategoryIndex={(index) => setOpenCategoryIndex(index)}
								key={index}
								index={index}
								openCategoryIndex={openCategoryIndex}
								showItem={openCategoryIndex === index ? true : false}
								categoryList={category?.card?.card}></CategoryList>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
export default RestaurantsMenuList;
