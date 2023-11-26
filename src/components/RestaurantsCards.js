import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const RestaurantsCards = (props) => {
	const {
		name,
		cloudinaryImageId,
		cuisines,
		avgRating,
		locality,
		sla,
		costForTwo,
		promoted
	} = props.restaurant;
	console.log(props.restaurant);
	return (
		<div className=" relative w-screen h-1/3 flex mx-2 items-center overflow-hidden hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-500 md:items-start md:mx-auto  my-4 rounded-xl border-4 border-blue-300 md:flex-col md:w-5/12 md:h-5/6 lg:h-4/5 lg:justify-center lg:my-4 lg:mx-14 lg:w-3/12 ">
			<img
				className=" w-1/3 h-full md:h-2/3 md:w-screen lg:w-full  lg:h-2/3 p-2 lg:px-2 lg:py-0 rounded-2xl"
				src={IMG_CDN_URL + cloudinaryImageId}
				alt=""
			/>
			{promoted?<p className="absolute top-1 left-1 bg-blue-900 text-white px-2 py-2 rounded-tl-lg">Promoted</p> :null}
			<div className=" flex flex-col lg-gap-2
			">
				<h1 className=" w-full font-extrabold px-2 md:px-4 md:text-md lg:text-lg">
					{name}
				</h1>
				<div className="h-fit flex px-1 gap-1  font-bold items-center item-center md:gap-1 md:mt-1 md:px-4 lg:gap-2">
					<img
						className="h-5 w-5 md:h-8 md:w-8"
						src="https://i.postimg.cc/435BQMtQ/icons8-rating-circled-48.png"
						alt="rating-circled"
					/>
					<p>{avgRating}</p>
					<span className=" font-black relative bottom-1 text-lg">.</span>
					<p>{sla.slaString}</p>
					<p className="hidden bg-blue-900 rounded-xl py-1 text-white md:block md:px-2 md:mx-2">{costForTwo}</p>
				</div>
				<p className="px-2 md:px-5 text-clip">
					{cuisines.slice(0, 1).join(", ")}
				</p>
				<p className="px-2 md:px-5">{locality}</p>
			</div>
		</div>
	);
};
export default RestaurantsCards;