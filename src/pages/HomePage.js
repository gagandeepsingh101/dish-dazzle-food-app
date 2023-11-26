import React, { useState } from "react";
import { fetchRestaurants } from "../utils/fetchRestaurant";
import RestaurantsCards from "../components/RestaurantsCards";
import SearchRestaurants from "../components/SearchRestaurants";
import ShimmerUI from "../components/ShimmerUI";
const HomePage = () => {
	const [defaultRestaurants, setDefaultRestaurants] = useState([]);
	const [restaurantsList, setRestaurantsList] = useState([]);
	fetchRestaurants(setDefaultRestaurants, setRestaurantsList);
	const filterTopRatingRestaurants = (e, filterBasis) => {
		e.preventDefault();
		let filteredRestaurants = [];
		filteredRestaurants = defaultRestaurants.filter((restaurant) => {
			switch (filterBasis) {
				case "rating":
					return restaurant?.info?.avgRating >= 4;
				case "time":
					return restaurant?.info?.sla?.deliveryTime < 18;
				case "cost":
					return Number(restaurant?.info?.costForTwo.split(" ")[0].split("₹")[1])<=200;
				case "veg":
					return restaurant?.info?.veg === true;

				default:
					return restaurant;
			}
		});
		setRestaurantsList(filteredRestaurants);
	};
	return (
		<div className="h-5/6 md:h-5/6">
			<div className="h-1/6 pt-2 ">
				<SearchRestaurants
					defaultRestaurants={defaultRestaurants}
					setRestaurantsList={setRestaurantsList}></SearchRestaurants>
				<div className="lg:w-1/4 h-1/3 flex gap-4 overflow-y-hidden overflow-x-scroll px-5 items-center justify-center scrollbar-hide ">
					<button
						name="rating"
						onClick={(e) => {
							let filterBasis = "rating";
							filterTopRatingRestaurants(e, filterBasis);
						}}
						className="lg:w-1/4 px-4 py-2 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white">
						Rating 4+.
					</button>
					<button
						name="time"
						onClick={(e) => {
							let filterBasis = "time";
							filterTopRatingRestaurants(e, filterBasis);
						}}
						className="lg:w-1/4 px-4 py-2 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white">
						Fast Delivery
					</button>
					<button
						name="veg"
						onClick={(e) => {
							let filterBasis = "veg";
							filterTopRatingRestaurants(e, filterBasis);
						}}
						className=" lg:w-1/4 break-normal py-2 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white">
						Veg
					</button>
					<button
						name="cost"
						onClick={(e) => {
							let filterBasis = "cost";
							filterTopRatingRestaurants(e, filterBasis);
						}}
						className=" w-1/4 px-4 py-2 bg-blue-100 rounded-3xl hover:bg-blue-900 hover:text-white">
						Cost Less Than 200
					</button>
				</div>
			</div>
			<div className=" h-5/6 overflow-y-scroll overflow-x-hidden flex flex-wrap md:pb-6 ">
				{restaurantsList.length === 0 ? (
					<ShimmerUI></ShimmerUI>
				) : (
					restaurantsList.map((restaurant) => (
						<RestaurantsCards
							key={restaurant.info.id}
							restaurant={restaurant.info}></RestaurantsCards>
					))
				)}
			</div>
		</div>
	);
};
export default HomePage;
